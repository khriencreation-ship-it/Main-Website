import type { Metadata } from 'next';
import './globals.css';
import { Bricolage_Grotesque } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';

const bricolage_grotesque = Bricolage_Grotesque({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Khrien',
  description: 'Where Business Owners Build Smarter solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black text-white min-h-screen ${bricolage_grotesque.className}`}
      >
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
