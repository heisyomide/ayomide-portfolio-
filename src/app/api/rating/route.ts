import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const { star } = await req.json();

    if (!star || star < 1 || star > 5) {
      return NextResponse.json({ error: "Invalid star" }, { status: 400 });
    }

    const { error } = await supabase.from("ratings").insert([{ stars: star }]);
    if (error) throw error;

    return GET(); // after insert, return updated stats
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to save rating" }, { status: 500 });
  }
}

export async function GET() {
  const { data, error } = await supabase.from("ratings").select("stars");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const total = data.length;
  const average = total > 0 ? data.reduce((a, b) => a + b.stars, 0) / total : 0;

  // Breakdown
  const breakdown: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  data.forEach((r) => {
    breakdown[r.stars] = (breakdown[r.stars] || 0) + 1;
  });

  return NextResponse.json({ average, total, breakdown });
}