import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={`bg-black text-white min-h-screen ${inter.className}`}>
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
