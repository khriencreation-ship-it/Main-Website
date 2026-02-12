import type { Metadata } from 'next';
import './globals.css';
import { Bricolage_Grotesque } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';
import ComingSoon from './coming-soon/page';


const bricolage_grotesque = Bricolage_Grotesque({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Khrien | Creative Excellence & Business Solutions',
    template: '%s | Khrien',
  },
  description: 'Where Business Owners Build Smarter solutions. Scaling excellence through design, strategy, and technology.',
  keywords: ['Khrien', 'Business Solutions', 'Creative Agency', 'UI/UX Design', 'Branding', 'Web Development'],
};

const LAUNCH_DATE = new Date(
  process.env.NEXT_PUBLIC_LAUNCH_DATE!
).getTime();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const isLaunched = Date.now() >= LAUNCH_DATE;
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`bg-black text-white min-h-screen ${bricolage_grotesque.className}`}
      >
        {/* <Header /> */}
        <SmoothScroll> {isLaunched ? children : <ComingSoon />}</SmoothScroll>
      </body>
    </html>
  );
}
