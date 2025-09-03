"use client";

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { supabase } from "@/lib/supabaseClient";

interface RatingStats {
  average: number;
  total: number;
  breakdown: Record<number, number>;
}

export default function StarRating() {
  const [stats, setStats] = useState<RatingStats>({
    average: 0,
    total: 0,
    breakdown: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  });

  const fetchRatings = async () => {
    const res = await fetch("/api/rating");
    const data = await res.json();
    setStats(data);
  };

  useEffect(() => {
    fetchRatings();

    const channel = supabase
      .channel("ratings-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "ratings" },
        () => {
          fetchRatings();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleClick = async (star: number) => {
    await fetch("/api/rating", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ star }),
    });
  };

  return (
    <div className="text-center max-w-md mx-auto">
      {/* Average Rating */}
      <div className="flex gap-2 justify-center mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={28}
            onClick={() => handleClick(star)}
            className={`cursor-pointer transition ${
              stats.average >= star ? "text-teal-400" : "text-gray-600"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-300 text-sm mb-6">
        ⭐ {stats.average.toFixed(1)} average from {stats.total} votes
      </p>

      {/* Breakdown */}
      <div className="space-y-2 text-sm text-gray-300">
        {[5, 4, 3, 2, 1].map((star) => {
          const count = stats.breakdown[star] || 0;
          const percentage =
            stats.total > 0 ? Math.round((count / stats.total) * 100) : 0;

          return (
            <div key={star} className="flex items-center gap-2">
              <span className="w-10 text-right">{star}⭐</span>
              <div className="flex-1 bg-gray-700 h-3 rounded relative">
                <div
                  className="absolute top-0 left-0 h-3 bg-teal-400 rounded"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span className="w-12 text-left">{count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}