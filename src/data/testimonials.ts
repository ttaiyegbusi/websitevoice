export type Testimonial = {
  date: string;
  rating: number; // out of 5
  platform: 'Trustpilot' | 'Serchen';
  quote: string;
  author: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    date: '24 January, 2022',
    rating: 5,
    platform: 'Trustpilot',
    quote:
      'This plugin solved my worries to convert the website text in to human-like voice that is hosted on a WordPress platform',
    author: 'Alex',
    role: 'WordPress Site Manager',
  },
  {
    date: '16 December, 2021',
    rating: 4,
    platform: 'Trustpilot',
    quote:
      'Compared to a handfull of other text to speech plugin i have tested, WebsiteVoice speeks Norwegian more naturally and more vividly.',
    author: 'Stebato',
    role: 'Norwegian Site Owner',
  },
  {
    date: '15 November, 2021',
    rating: 5,
    platform: 'Serchen',
    quote:
      'Great speech recogntion and text to speech app for website. Highly recommended for website owners.',
    author: 'Dave W',
    role: 'Dave Consulting',
  },
  {
    date: '13 November, 2021',
    rating: 3,
    platform: 'Trustpilot',
    quote:
      'WebsiteVoice has saved me tons of time and money to not go out to get the voice over done from specialists.',
    author: 'Rabby Kawsar',
    role: 'United States User',
  },
  {
    date: '12 November, 2021',
    rating: 5,
    platform: 'Trustpilot',
    quote:
      'I like the voice reader widget of this tool. It is easily embedded in the website, and one can easily turn on/off the speech button',
    author: 'Ao Waj',
    role: 'United States User',
  },
  {
    date: '3 January, 2022',
    rating: 5,
    platform: 'Trustpilot',
    quote:
      'Great customer service. Amazing tool to integrate with the website.',
    author: 'Sammy Davis',
    role: 'United States User',
  },
];
