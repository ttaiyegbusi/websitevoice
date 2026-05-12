export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  body: string[];
};

export const POSTS: BlogPost[] = [
  {
    slug: 'why-text-to-speech-matters',
    title: 'Why text-to-speech is the next big thing for content sites',
    excerpt:
      'Audio is changing how people consume the web. Here is why your blog should embrace it now.',
    author: 'Maya Chen',
    date: 'May 2, 2026',
    readTime: '6 min read',
    category: 'Industry',
    body: [
      'Podcasts proved that people will happily listen to long-form content while doing something else. The challenge for written content has always been that reading demands your eyes and your attention.',
      'Text-to-speech changes that equation. A reader who is cooking dinner, walking the dog, or commuting can now tune in to your article instead of bookmarking it and forgetting about it.',
      'In our internal data, sites that added a play button saw a 32% lift in time-on-page among returning visitors. That kind of engagement is hard to buy.',
    ],
  },
  {
    slug: 'accessibility-checklist',
    title: 'A practical accessibility checklist for content creators',
    excerpt:
      'Eight quick wins that make your site usable for everyone — and improve your SEO at the same time.',
    author: 'Jordan Pak',
    date: 'April 18, 2026',
    readTime: '4 min read',
    category: 'Accessibility',
    body: [
      'Accessibility is often framed as a compliance issue, but in practice it overlaps almost completely with good design.',
      'The checklist below covers the easy wins: descriptive alt text, semantic headings, sufficient color contrast, keyboard navigation, focus states, transcripts, captions, and audio versions of long-form text.',
      'You don\'t have to do all eight at once. Pick the two that apply most to your site and ship them this week.',
    ],
  },
  {
    slug: 'voice-cloning-explained',
    title: 'Neural voice cloning, explained without the hype',
    excerpt:
      'How modern AI voices work, what they can and can\'t do, and why "human-sounding" is still a moving target.',
    author: 'Sam Aluko',
    date: 'March 30, 2026',
    readTime: '8 min read',
    category: 'Technology',
    body: [
      'A few years ago, synthetic speech sounded like a satnav. Today, the better systems can read a paragraph in a voice that is, for most listeners, indistinguishable from a human narrator.',
      'The breakthrough is end-to-end neural training: instead of stitching together pre-recorded phonemes, the model learns to predict an audio waveform directly from the text.',
      'There are still tells — odd prosody on rare words, slightly off pacing on numbers and acronyms — but the gap closes a little every quarter.',
    ],
  },
  {
    slug: 'wordpress-integration-guide',
    title: 'How to add voice to your WordPress site in under five minutes',
    excerpt:
      'A step-by-step walkthrough of installing the WebsiteVoice WordPress plugin.',
    author: 'Priya Raman',
    date: 'March 12, 2026',
    readTime: '3 min read',
    category: 'Tutorials',
    body: [
      'WordPress runs nearly half the web, so we put a lot of work into making sure the WebsiteVoice plugin is the smoothest install of any text-to-speech tool out there.',
      'Step one: install the plugin from the WordPress plugin directory. Step two: paste your API key from your WebsiteVoice dashboard. Step three: there is no step three.',
      'Once it is active, every post on your site automatically gets a play button. You can customize position, color, and voice from the WebsiteVoice dashboard at any time.',
    ],
  },
  {
    slug: 'engagement-metrics',
    title: 'The engagement metrics every content site should track',
    excerpt:
      'Pageviews are vanity. Time spent listening is closer to the truth.',
    author: 'Maya Chen',
    date: 'February 22, 2026',
    readTime: '5 min read',
    category: 'Analytics',
    body: [
      'Pageviews are the loudest metric in publishing, but they tell you almost nothing about whether anyone actually consumed your content.',
      'A better set of metrics: scroll depth, time on page, return visits, and — if you have it — audio play completion rate.',
      'Audio is particularly useful because a listener has to actively press play. That single click is a much stronger signal than a tab opening in the background.',
    ],
  },
  {
    slug: 'multilingual-content',
    title: 'Reaching a global audience with multilingual voices',
    excerpt:
      'Your readers don\'t all speak English. Here is how to meet them where they are.',
    author: 'Jordan Pak',
    date: 'February 5, 2026',
    readTime: '4 min read',
    category: 'Growth',
    body: [
      'The web is more multilingual than most English-speaking publishers realize. A surprising share of your readers may be processing your content in their second or third language.',
      'Offering an audio version in their native language — or even just in their native accent — can dramatically improve comprehension and retention.',
      'WebsiteVoice ships with 35+ languages and 50-plus voices, so you can offer Spanish, French, German, Japanese, and dozens more without recording anything yourself.',
    ],
  },
];
