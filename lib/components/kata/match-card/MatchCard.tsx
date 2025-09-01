"use client";

import React from "react";

type MatchCardProps = {
  league: string;
  team1: string;
  team2: string;
  matchTime: string;
  odds: {
    team1: number;
    draw: number;
    team2: number;
  };
};

export default function MatchCard({
  league,
  team1,
  team2,
  matchTime,
  odds,
}: MatchCardProps) {
  return (
    <div className="w-full max-w-md mx-auto bg-[#3a3a3a] rounded-lg shadow-md overflow-hidden border border-gray-700">
      {/* لیگ */}
      <div className="px-4 py-2 bg-[#014736] text-sm text-gray-200 font-semibold">
        {league}
      </div>

      {/* تیم‌ها */}
      <div className="px-4 py-3 flex items-center justify-between text-white">
        <div className="flex flex-col">
          <span className="font-bold">{team1}</span>
          <span className="font-bold">{team2}</span>
        </div>
        <div className="text-xs text-gray-300">{matchTime}</div>
      </div>

      {/* ضرایب */}
      <div className="grid grid-cols-3 divide-x divide-gray-700 border-t border-gray-700">
        <button className="py-3 text-center text-white font-semibold hover:bg-[#FFD700] hover:text-[#025E4E] transition">
          {odds.team1}
        </button>
        <button className="py-3 text-center text-white font-semibold hover:bg-[#FFD700] hover:text-[#025E4E] transition">
          {odds.draw}
        </button>
        <button className="py-3 text-center text-white font-semibold hover:bg-[#FFD700] hover:text-[#025E4E] transition">
          {odds.team2}
        </button>
      </div>
    </div>
  );
}
