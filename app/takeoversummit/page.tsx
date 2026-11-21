import React from 'react';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/components/Footer';
import TakeoverSummitForm from './TakeoverSummitForm';

export const metadata: Metadata = {
  title: 'Takeover Summit — 40% Cohort Discount',
  description:
    'Exclusive Takeover Summit offer: First 5 students to apply get 40% off our next tech cohort.',
};

export default function TakeoverSummitPage() {
  return (
    <div>
      <ToastContainer position="top-right" theme="dark" />
      <TakeoverSummitForm />
      <Footer />
    </div>
  );
}
