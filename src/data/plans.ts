export type Plan = {
  id: string;
  name: string;
  monthly: number;
  description: string;
  popular?: boolean;
  features: string[];
  /** Heading like "You get:" or "Everything in 'Starter', plus:" */
  extrasLabel: string;
  extras: string[];
  /** Extra features hidden behind "See more" */
  extraExtras?: string[];
};

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthly: 9,
    description: 'Essential text-to-speech for personal sites and blogs',
    features: ['35+ languages', '50+ AI voices', '1 play a day'],
    extrasLabel: 'You get:',
    extras: [
      'Customizable widget',
      'Audio analytics',
      'Social sharing',
      'Ticket support',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    monthly: 29,
    description: 'Ideal for creators, SMBs, and agencies building audience',
    popular: true,
    features: ['35+ languages', '55+ AI voices', '5 plays a day'],
    extrasLabel: 'Everything in "Starter", plus:',
    extras: [
      'No audio or text ads',
      'Watermark removal',
      'Basic support',
      'Accessibility features',
    ],
    extraExtras: [
      'Reading speed customization',
      'Custom player position',
      'Article highlighting',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    monthly: 49,
    description: 'The complete plan for large teams and professional agencies',
    features: ['35+ languages', '60+ AI voices', '10 plays a day'],
    extrasLabel: 'Everything in "Premium", plus:',
    extras: [
      'Faster audio conversion',
      'Custom audio at the beginning and end',
      'MP3 audio downloads',
      'Voice speed control (UVT)',
      'Priority support',
    ],
  },
];

/** Yearly = 12 × monthly × 0.9 (10% off), displayed as the per-month equivalent */
export function getDisplayPrice(monthly: number, period: 'monthly' | 'yearly') {
  if (period === 'monthly') return monthly;
  // Per-month equivalent on yearly, rounded down to whole dollar to stay clean
  return Math.round(monthly * 0.9);
}
