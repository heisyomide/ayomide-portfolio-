"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [hoveredStar, setHoveredStar] = useState(0);

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
        () => fetchRatings()
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
    <div className="max-w-md mx-auto p-8 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-xl relative overflow-hidden group">
      {/* Background Pulse Effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      
      <div className="text-center mb-8">
        <span className="text-[10px] uppercase tracking-[0.4em] text-indigo-400 font-bold block mb-4">
          Sentiment Analysis
        </span>
        
        {/* Interaction Zone */}
        <div className="flex gap-4 justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <div key={star} className="relative">
              <FaStar
                size={22}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                onClick={() => handleClick(star)}
                className={`cursor-pointer transition-all duration-500 transform hover:scale-125 ${
                  (hoveredStar || stats.average) >= star 
                  ? "text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" 
                  : "text-white/10"
                }`}
              />
              {hoveredStar === star && (
                <motion.div 
                  layoutId="glow"
                  className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full"
                />
              )}
            </div>
          ))}
        </div>
        
        <p className="font-mono text-[11px] text-white/40 tracking-widest uppercase">
          AVG_STABILITY: <span className="text-white">{stats.average.toFixed(1)}</span> / {stats.total} VOTES
        </p>
      </div>

      {/* Luminous Breakdown Gauges */}
      <div className="space-y-4">
        {[5, 4, 3, 2, 1].map((star) => {
          const count = stats.breakdown[star] || 0;
          const percentage = stats.total > 0 ? Math.round((count / stats.total) * 100) : 0;

          return (
            <div key={star} className="group/line flex items-center gap-4">
              <span className="w-6 text-[10px] font-mono text-white/20 group-hover/line:text-indigo-400 transition-colors">
                {star}
              </span>
              
              <div className="flex-1 bg-white/5 h-[2px] rounded-full relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, ease: "circOut" }}
                  className="absolute top-0 left-0 h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                />
              </div>
              
              <span className="w-8 text-right font-mono text-[9px] text-white/40">
                {percentage}%
              </span>
            </div>
          );
        })}
      </div>

      {/* Technical Footer Decoration */}
      <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-20">
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="w-1 h-1 bg-white rounded-full animate-pulse delay-75" />
          <div className="w-1 h-1 bg-white rounded-full animate-pulse delay-150" />
        </div>
        <span className="text-[7px] font-mono uppercase tracking-[0.3em]">Sync_Status: Live</span>
      </div>
    </div>
  );
}