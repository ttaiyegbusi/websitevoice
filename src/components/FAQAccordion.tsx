'use client';

import { useState } from 'react';
import type { FAQItem } from '@/data/faqs';

type Props = {
  items: FAQItem[];
  /** Index that is open by default. Use -1 for all closed. */
  defaultOpen?: number;
};

export default function FAQAccordion({ items, defaultOpen = 2 }: Props) {
  const [openIdx, setOpenIdx] = useState<number>(defaultOpen);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className={`bg-white rounded-xl border transition-shadow ${
              isOpen
                ? 'border-ink-200 shadow-card'
                : 'border-transparent hover:border-ink-200'
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIdx(isOpen ? -1 : idx)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
            >
              <span className="flex items-center gap-3.5 flex-1">
                <span
                  className={`shrink-0 w-5 h-5 inline-flex items-center justify-center text-brand-700 transition-transform ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <path
                      d="M7 1v12M1 7h12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="font-semibold text-[15px] text-ink-900">
                  {item.q}
                </span>
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 pl-[52px] text-ink-500 text-[14.5px] leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
