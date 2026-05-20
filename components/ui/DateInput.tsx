'use client';

import { forwardRef } from 'react';

interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  disabled?: boolean;
}

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ value, onChange, label = 'Date of Birth', error, disabled = false }, ref) => {
    return (
      <div className="w-full space-y-2">
        <label
          htmlFor="dateOfBirth"
          className="flex items-center justify-between"
        >
          <span className="text-sm font-medium text-slate-300">{label}</span>
          {value && (
            <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Selected
            </span>
          )}
        </label>
        <div className="relative group">
          <div className={`absolute -inset-px rounded-xl bg-gradient-to-r transition-opacity duration-300 ${
            error
              ? 'from-red-500/50 to-red-600/50 opacity-100'
              : value
                ? 'from-violet-500/40 to-indigo-500/40 opacity-100'
                : 'from-violet-500/0 to-indigo-500/0 opacity-0 group-hover:opacity-100 group-hover:from-violet-500/20 group-hover:to-indigo-500/20'
          }`} />
          <input
            ref={ref}
            type="date"
            id="dateOfBirth"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            className={`relative w-full h-14 px-4 text-base sm:text-lg bg-white/[0.04] border rounded-xl
              text-white placeholder-slate-500
              focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/60 focus:bg-white/[0.06]
              disabled:opacity-40 disabled:cursor-not-allowed
              transition-all duration-200
              ${error ? 'border-red-500/60' : 'border-white/[0.08] hover:border-white/[0.15]'}
            `}
            aria-invalid={!!error}
            aria-describedby={error ? 'date-error' : undefined}
            style={{ colorScheme: 'dark' }}
          />
        </div>
        {error && (
          <p
            id="date-error"
            className="flex items-center gap-1.5 text-sm text-red-400 font-medium pt-1"
            role="alert"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

DateInput.displayName = 'DateInput';

export default DateInput;
