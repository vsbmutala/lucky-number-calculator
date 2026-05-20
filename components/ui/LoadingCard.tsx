export default function LoadingCard() {
  return (
    <div className="w-full max-w-lg mx-auto animate-scale-in">
      <div className="flex flex-col items-center text-center space-y-12">
        {/* Orbital spinner */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44">
          {/* Outer glow */}
          <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-2xl animate-glow-pulse" />

          {/* Ring 1 — outer */}
          <div className="absolute inset-0 rounded-full border-2 border-violet-500/10" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-violet-500 animate-spin" style={{ animationDuration: '2s' }} />

          {/* Ring 2 — middle */}
          <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-fuchsia-400 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />

          {/* Ring 3 — inner */}
          <div className="absolute inset-8 rounded-full border-2 border-transparent border-t-indigo-400 animate-spin" style={{ animationDuration: '1s' }} />

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-br from-violet-400 to-fuchsia-400 rounded-full shadow-lg shadow-violet-500/40 animate-pulse" />
          </div>

          {/* Orbiting dots */}
          <div className="absolute inset-0 flex items-center justify-center animate-orbit" style={{ animationDuration: '3s' }}>
            <div className="w-2.5 h-2.5 bg-violet-400 rounded-full shadow-md shadow-violet-400/50" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center animate-orbit" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full shadow-md shadow-fuchsia-400/50" />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Analyzing Your Birth Date
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xs mx-auto">
            Crunching numerology and reducing digits to find your number
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-xs space-y-2">
          <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 rounded-full animate-progress-fill" />
          </div>
          <p className="text-xs text-slate-500 font-medium">Processing...</p>
        </div>
      </div>
    </div>
  );
}
