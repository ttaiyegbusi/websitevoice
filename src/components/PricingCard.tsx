'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Plan } from '@/data/plans';
import { getDisplayPrice } from '@/data/plans';
import type { BillingPeriod } from './BillingToggle';

type Props = {
  plan: Plan;
  period: BillingPeriod;
};

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={className}
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="9" fill="currentColor" opacity="0.15" />
      <path
        d="M5.5 9.2l2.4 2.3 4.6-4.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="9" r="3" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

export default function PricingCard({ plan, period }: Props) {
  const [expanded, setExpanded] = useState(false);
  const price = getDisplayPrice(plan.monthly, period);
  const hasExtras = (plan.extraExtras?.length ?? 0) > 0;
  const isPopular = plan.popular;

  return (
    <div
      className={`relative bg-white rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ${
        isPopular
          ? 'shadow-card-popular md:-translate-y-3 ring-1 ring-brand-100'
          : 'shadow-card border border-ink-200 hover:shadow-card-hover'
      }`}
    >
      {/* Header */}
      <div
        className={`px-7 pt-7 pb-6 ${
          isPopular ? 'bg-brand-700 text-white' : 'bg-white'
        }`}
      >
        <div className="flex items-center gap-3">
          <h3
            className={`text-[18px] font-bold ${
              isPopular ? 'text-white' : 'text-ink-900'
            }`}
          >
            {plan.name}
          </h3>
          {isPopular && (
            <span className="inline-flex items-center bg-accent-500 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 h-5 rounded-full">
              Most Popular
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="px-7 pt-6 pb-7 flex flex-col flex-1">
        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-[44px] font-extrabold leading-none text-ink-900">
            <span className="text-[26px] align-top relative top-2">$</span>
            {price}
          </span>
          <span className="text-ink-500 text-[15px]">/month</span>
        </div>
        <p className="mt-4 text-ink-500 text-[14.5px] min-h-[44px]">
          {plan.description}
        </p>

        {/* CTA */}
        <Link
          href="/signup"
          className={`mt-5 inline-flex items-center justify-center font-bold text-[14.5px] h-11 rounded-full transition-colors ${
            isPopular
              ? 'bg-brand-700 text-white hover:bg-brand-800'
              : 'bg-ink-100 text-ink-900 hover:bg-ink-200'
          }`}
        >
          Start 14 days free trial
        </Link>

        {/* Divider */}
        <div className="mt-7 border-t border-ink-200" />

        {/* Core features */}
        <div className="mt-5">
          <h4 className="text-[13px] font-bold text-ink-900 mb-3">Features:</h4>
          <ul className="space-y-2.5">
            {plan.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2.5 text-[14px] text-ink-700"
              >
                <span className="text-brand-700">
                  <CheckIcon />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-ink-200" />

        {/* Extras */}
        <div className="mt-5">
          <h4 className="text-[13px] font-bold text-ink-900 mb-3">
            {plan.extrasLabel}
          </h4>
          <ul className="space-y-2.5">
            {plan.extras.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2.5 text-[14px] text-ink-500"
              >
                <span className="text-ink-400">
                  <DotIcon />
                </span>
                {f}
              </li>
            ))}
          </ul>

          {hasExtras && (
            <>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-2.5 mt-2.5">
                    {plan.extraExtras?.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-[14px] text-ink-500"
                      >
                        <span className="text-ink-400">
                          <DotIcon />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setExpanded((e) => !e)}
                className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-brand-700 hover:text-brand-800"
              >
                {expanded ? 'See less' : 'See more'}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  className={`transition-transform ${
                    expanded ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
