import type { Metadata } from 'next';
import './globals.css';
import { Bricolage_Grotesque } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';

const bricolage_grotesque = Bricolage_Grotesque({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Khrien | Creative Excellence & Business Solutions',
    template: '%s | Khrien',
  },
  description: 'Where Business Owners Build Smarter solutions. Scaling excellence through design, strategy, and technology.',
  keywords: ['Khrien', 'Business Solutions', 'Creative Agency', 'UI/UX Design', 'Branding', 'Web Development'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`bg-black text-white min-h-screen ${bricolage_grotesque.className}`}
      >
        {/* <Header /> */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
