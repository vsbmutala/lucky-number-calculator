'use client';

import { useState } from 'react';
import { useLuckyNumberCalculator } from '@/hooks/useLuckyNumberCalculator';
import DateInput from '@/components/ui/DateInput';
import LoadingCard from '@/components/ui/LoadingCard';
import ResultCard from '@/components/ui/ResultCard';

const FEATURES = [
  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Instant Results', desc: 'Get your lucky number in seconds' },
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: '100% Private', desc: 'No data stored or shared' },
  { icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', title: 'Numerology Based', desc: 'Ancient wisdom, modern tech' },
];

export default function LuckyNumberCalculator() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const { state, calculate, reset } = useLuckyNumberCalculator();

  const handleCalculate = () => {
    if (!dateOfBirth) return;
    const date = new Date(dateOfBirth);
    calculate(date);
  };

  const handleReset = () => {
    reset();
    setDateOfBirth('');
  };

  const showForm = state.status === 'idle' || state.status === 'error';

  return (
    <div className="min-h-screen bg-[#030014] relative flex flex-col">
      {/* ── Background mesh ── */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_20%_0%,rgba(120,60,220,0.15),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_80%_100%,rgba(60,100,255,0.12),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjAuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')] opacity-60" />
      </div>

      {/* ── Navbar ── */}
      <nav className="relative z-20 w-full border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <svg className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">LuckyNum</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-sm text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Free &amp; Private</span>
          </div>
        </div>
      </nav>

      {/* ── Main content ── */}
      <main className="relative z-10 flex-1 flex flex-col">

        {/* === IDLE / ERROR — Split layout === */}
        {showForm && (
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-12 lg:py-0">
            {/* Left — Hero */}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-center text-center lg:text-center">
              <div className="max-w-xl animate-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span className="text-violet-300 text-xs sm:text-sm font-medium tracking-wide uppercase">Numerology Calculator</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                  Discover Your{' '}
                  <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-shift">
                    Lucky Number
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed mb-10 max-w-md mx-auto">
                  Enter your date of birth and unveil the single digit the universe has assigned to you through the ancient art of numerology.
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap justify-center gap-2.5">
                  {FEATURES.map((f, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] transition-colors"
                      style={{ animationDelay: `${i * 120}ms` }}
                    >
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                      </svg>
                      <span className="text-slate-300 text-sm font-medium whitespace-nowrap">{f.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form card */}
            <div className="lg:w-1/2 flex items-center justify-center py-8 lg:py-0">
              <div className="w-full max-w-md animate-fade-up" style={{ animationDelay: '150ms' }}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-indigo-600/20 rounded-[28px] blur-xl opacity-60" />
                  <div className="relative bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/[0.08] p-6 sm:p-8 shadow-2xl shadow-black/40">
                    {/* Card header */}
                    <div className="mb-8">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">Enter Your Birthday</h2>
                      <p className="text-slate-400 mt-2 text-sm sm:text-base">We&apos;ll calculate your personal lucky number</p>
                    </div>

                    <div className="space-y-6">
                      <DateInput
                        value={dateOfBirth}
                        onChange={setDateOfBirth}
                        error={state.error || undefined}
                      />

                      <button
                        onClick={handleCalculate}
                        disabled={!dateOfBirth}
                        className="group relative w-full h-14 sm:h-16 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 text-white text-base sm:text-lg font-bold rounded-2xl shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 focus:outline-none focus:ring-4 focus:ring-violet-500/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-violet-500/25 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative flex items-center justify-center gap-2">
                          Reveal My Number
                          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </button>
                    </div>

                    {/* How it works */}
                    <div className="mt-8 pt-6 border-t border-white/[0.06]">
                      <p className="text-xs uppercase tracking-widest text-slate-500 font-medium mb-4">How it works</p>
                      <div className="grid grid-cols-4 gap-2 sm:gap-3">
                        {['Enter DOB', 'Sum digits', 'Reduce', 'Result'].map((step, i) => (
                          <div key={i} className="text-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-violet-400 font-bold text-sm sm:text-base mb-1.5">
                              {i + 1}
                            </div>
                            <p className="text-[10px] sm:text-xs text-slate-500 leading-tight">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {state.status === 'error' && state.error && (
                      <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                        <p className="text-red-400 text-sm font-medium flex items-center gap-2">
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {state.error}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        )}

        {/* === LOADING === */}
        {state.status === 'loading' && (
          <div className="flex-1 flex items-center justify-center px-4 py-12">
            <LoadingCard />
          </div>
        )}

        {/* === RESULT === */}
        {state.status === 'success' && state.result && (
          <div className="flex-1 flex items-center justify-center px-4 py-12">
            <ResultCard result={state.result} onReset={handleReset} />
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-xs text-slate-600">
          <span>Built with numerology &amp; love</span>
          <span className="hidden sm:inline">Your data never leaves your browser</span>
        </div>
      </footer>
    </div>
  );
}
