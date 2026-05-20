import { LuckyNumberResult } from '@/types';

interface ResultCardProps {
  result: LuckyNumberResult;
  onReset: () => void;
}

export default function ResultCard({ result, onReset }: ResultCardProps) {
  const { luckyNumber, calculationSteps } = result;

  const formattedDate = result.dateOfBirth.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-up">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* ── Left: Lucky number hero ── */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center">
          <div className="relative w-full aspect-square max-w-[280px] sm:max-w-xs">
            {/* Background rings */}
            <div className="absolute inset-0 rounded-full border border-violet-500/10" />
            <div className="absolute inset-6 rounded-full border border-violet-500/5" />
            <div className="absolute inset-12 rounded-full border border-violet-500/5" />

            {/* Glow */}
            <div className="absolute inset-8 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full blur-3xl opacity-25 animate-glow-pulse" />

            {/* Center card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-violet-300 font-semibold mb-3">Your Number</p>
                <div className="animate-number-pop">
                  <span className="text-[8rem] sm:text-[10rem] font-black leading-none bg-gradient-to-br from-white via-violet-200 to-fuchsia-300 bg-clip-text text-transparent drop-shadow-2xl">
                    {luckyNumber}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating orbiting accent */}
            <div className="absolute inset-0 animate-orbit" style={{ animationDuration: '10s' }}>
              <div className="w-3 h-3 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
            </div>
            <div className="absolute inset-0 animate-orbit" style={{ animationDuration: '14s', animationDirection: 'reverse' }}>
              <div className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-md shadow-fuchsia-400/50" />
            </div>
          </div>

          {/* Date badge */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-slate-300">{formattedDate}</span>
          </div>
        </div>

        {/* ── Right: Details panel ── */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          {/* Steps card */}
          <div className="relative flex-1">
            <div className="absolute -inset-px bg-gradient-to-b from-violet-500/10 to-transparent rounded-3xl" />
            <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/[0.06] p-6 sm:p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white">How We Got There</h4>
              </div>

              <div className="space-y-3">
                {calculationSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] transition-colors animate-fade-up"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500/20 to-indigo-500/20 text-violet-400 flex items-center justify-center font-bold text-xs">
                      {index + 1}
                    </span>
                    <span className="text-sm sm:text-base text-slate-300 font-medium font-mono">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={onReset}
            className="group relative w-full h-14 sm:h-16 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 text-white text-base sm:text-lg font-bold rounded-2xl shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 focus:outline-none focus:ring-4 focus:ring-violet-500/30 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Try Another Date
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
