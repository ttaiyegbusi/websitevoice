export type FAQItem = {
  q: string;
  a: string;
};

export const FAQS: FAQItem[] = [
  {
    q: 'What is text-to-speech?',
    a: 'Text-to-speech (TTS) is a technology that converts written text into spoken audio using synthetic voices. It allows visitors to listen to your content instead of reading it.',
  },
  {
    q: 'How to add text-to-speech to your website?',
    a: 'Sign up for a WebsiteVoice account, copy the small script we provide, and paste it into the <head> of your site. A play button will appear on your pages automatically.',
  },
  {
    q: 'How does AI text-to-speech work?',
    a: 'AI text-to-speech uses neural models to turn text into natural sounding audio. With WebsiteVoice, you add a small script to your site. It detects page content and reads it aloud in real time with natural voices, plus controls for language, accent, speed, and optional custom voices.',
  },
  {
    q: 'What is text-to-speech used for?',
    a: 'TTS is used for accessibility (helping users with visual impairments or learning disabilities), multitasking (listening while commuting or doing chores), and improving engagement on content-heavy sites.',
  },
  {
    q: 'Can I add text to speech play button to any website?',
    a: 'Yes — WebsiteVoice works with virtually any website. We support standard HTML sites, WordPress, Webflow, Squarespace, Wix, Ghost, and most other platforms via a script tag.',
  },
  {
    q: 'What is considered a "new play" on WebsiteVoice?',
    a: 'A new play is counted when a unique visitor clicks the play button on a page. Subsequent plays of the same article by the same visitor on the same day do not count again.',
  },
  {
    q: 'Do multiple visitors playing the same article on the same day count as multiple plays?',
    a: 'Yes. Each unique visitor that plays an article counts as one play, even if it is the same article on the same day.',
  },
  {
    q: 'How many words does one audio play cover?',
    a: 'A single play covers an entire article regardless of its length — whether it is 200 words or 5,000 words, that is one play.',
  },
  {
    q: 'Do plays reset each day?',
    a: 'Your monthly play allowance resets at the start of each billing cycle, not daily. The per-visitor daily play limit (e.g. 1, 5, or 10 plays a day) applies to how many times a single visitor can trigger plays on your site each day.',
  },
  {
    q: 'How can I add custom audio at the beginning and end?',
    a: 'On the Premium and Professional plans, you can upload short intro and outro audio clips from your dashboard that play before and after each article.',
  },
  {
    q: 'What does Voice speed control (UVT) do?',
    a: 'User Voice Tuning lets your visitors adjust playback speed and pitch in real time directly from the player on your site.',
  },
  {
    q: 'Do you offer monthly and annual billing?',
    a: 'Yes. You can pay monthly or annually. Annual billing comes with a 10% discount.',
  },
  {
    q: 'Do you offer free trial?',
    a: 'Yes — every plan starts with a 14-day free trial. No credit card is required to start.',
  },
  {
    q: 'Does WebsiteVoice have a WordPress Plugin?',
    a: 'Yes — we offer an official WordPress plugin available on the WordPress plugin directory. It installs in seconds.',
  },
];
