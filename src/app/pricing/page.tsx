'use client';

import { useState } from 'react';
import BillingToggle, { type BillingPeriod } from '@/components/BillingToggle';
import PricingCard from '@/components/PricingCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQAccordion from '@/components/FAQAccordion';
import FinalCTA from '@/components/FinalCTA';
import { PLANS } from '@/data/plans';
import { FAQS } from '@/data/faqs';

export default function PricingPage() {
  const [period, setPeriod] = useState<BillingPeriod>('monthly');

  return (
    <>
      {/* Hero — blue gradient with curved bottom */}
      <section className="relative bg-hero-gradient text-white pt-[120px] pb-[200px] md:pb-[260px] overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-60" aria-hidden="true" />
        <div className="container-page relative">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-[32px] md:text-[44px] font-bold leading-tight">
              Select the Right Plan for Your Site
            </h1>
            <p className="mt-4 text-white/90 text-[16px] md:text-[17px] leading-relaxed">
              Choose the right pricing plan for your website and add a
              text-to-speech play button to your site in minutes.
            </p>
            <div className="mt-7 flex justify-center">
              <BillingToggle value={period} onChange={setPeriod} />
            </div>
          </div>
        </div>
        {/* Curved bottom — SVG wave to transition into white */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ height: '60px' }}
        >
          <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </section>

      {/* Pricing cards — overlap into the hero */}
      <section className="container-page -mt-[180px] md:-mt-[220px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 items-start">
          {PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} period={period} />
          ))}
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQ section */}
      <section className="bg-ink-100 py-20">
        <div className="container-page grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <div>
            <p className="text-ink-500 text-[14px] mb-2">
              Answering your common questions
            </p>
            <h2 className="text-[28px] md:text-[34px] font-bold text-ink-900 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-ink-500 text-[15px]">
              Gain instant access to useful features upon{' '}
              <a href="/signup" className="text-brand-700 underline font-semibold">
                signing up.
              </a>
            </p>
          </div>
          <div>
            <FAQAccordion items={FAQS} defaultOpen={2} />
          </div>
        </div>
      </section>

      {/* About blurb */}
      <section className="container-page py-20 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
        <div>
          <div className="mb-4">
            <span className="inline-block">
              {/* Logo standalone */}
            </span>
          </div>
          <h2 className="text-[28px] md:text-[32px] font-bold text-ink-900 leading-tight">
            Start improving your user engagement, accessibility, and audience
            growth
          </h2>
        </div>
        <div className="space-y-5 text-ink-700 text-[15px] leading-relaxed">
          <p>
            We're a group of avid readers and podcast listeners who realized that
            sometimes it's difficult to catch up on our favorite blogs, news media
            and articles online when we're busy commuting, working, driving, doing
            chores, and keeping our eyes and hands occupied.
          </p>
          <p>
            And so we asked ourselves: wouldn't it be great if we could listen to
            these websites like a podcast instead of reading? The next question
            also arose: how are people with learning disabilities and visual
            impairments able to process information that is online in text?
          </p>
          <p>
            Thus we created WebsiteVoice, a text-to-speech solution for bloggers
            and web content creators that allow their audience to tune in to their
            content for better user engagement, accessibility and to grow more
            subscribers for their websites.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
