import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const assistant = localFont({
  src: [
    {
      path: './fonts/Assistant-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Assistant-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Assistant-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Assistant-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-assistant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WebsiteVoice — Text-to-Speech for your website',
  description:
    'Add a text-to-speech play button to your site in minutes. Improve user engagement, accessibility, and audience growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={assistant.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
