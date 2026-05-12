'use client';

export type BillingPeriod = 'monthly' | 'yearly';

type Props = {
  value: BillingPeriod;
  onChange: (v: BillingPeriod) => void;
};

export default function BillingToggle({ value, onChange }: Props) {
  return (
    <div
      role="tablist"
      aria-label="Billing period"
      className="inline-flex items-center bg-white/95 rounded-full p-1 shadow-card relative"
    >
      <button
        role="tab"
        aria-selected={value === 'monthly'}
        onClick={() => onChange('monthly')}
        className={`relative z-10 px-6 h-9 rounded-full text-[14px] font-semibold transition-colors ${
          value === 'monthly' ? 'bg-brand-700 text-white' : 'text-ink-700'
        }`}
      >
        Monthly
      </button>
      <button
        role="tab"
        aria-selected={value === 'yearly'}
        onClick={() => onChange('yearly')}
        className={`relative z-10 px-6 h-9 rounded-full text-[14px] font-semibold transition-colors flex items-center gap-2 ${
          value === 'yearly' ? 'bg-brand-700 text-white' : 'text-ink-700'
        }`}
      >
        Yearly
        <span
          className={`inline-flex items-center px-2 h-5 rounded-full text-[11px] font-bold ${
            value === 'yearly'
              ? 'bg-white text-accent-600'
              : 'bg-accent-500 text-white'
          }`}
        >
          10% Off
        </span>
      </button>
    </div>
  );
}
