"use client";

export default function Gondola() {
  return (
    <div className="relative w-full h-full">
      {/* Cable line (vertical, black) */}
      <div className="absolute left-1/2 top-0 h-full w-[3px] bg-black transform -translate-x-1/2 shadow-lg rounded-full" />
      {/* Single gondola - on the left side */}
      <div className="absolute left-1/2 transform -translate-x-8 animate-cable-car">
        <div className="relative animate-gondola-sway">
          {/* Gondola shadow with movement */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-black/15 rounded-full blur-md animate-pulse"></div>
          {/* Main gondola car with enhanced styling */}
          <div className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 rounded-xl p-3 shadow-xl border-2 border-slate-200">
            {/* Gondola windows with glass effect */}
            <div className="absolute top-2 left-2 w-3 h-3 bg-gradient-to-br from-blue-200/80 to-blue-300/60 rounded-sm shadow-inner"></div>
            <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-blue-200/80 to-blue-300/60 rounded-sm shadow-inner"></div>
            {/* Gondola body - custom design */}
            <div className="w-8 h-6 bg-gradient-to-b from-slate-100 to-slate-200 rounded-lg border border-slate-300 shadow-inner"></div>
            {/* Gondola base with depth */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gradient-to-b from-slate-300 to-slate-400 rounded-sm shadow-lg"></div>
            {/* Gondola roof */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-b from-slate-200 to-slate-300 rounded-t-sm"></div>
          </div>
          {/* Enhanced connection to cable */}
          <div className="absolute -top-3 left-1/2 transform translate-x-4 w-1.5 h-3 bg-gradient-to-b from-slate-400 to-slate-500 rounded-full shadow-md"></div>
        </div>
      </div>
    </div>
  );
}
