'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'motion/react';
import { toast } from 'react-toastify';
import {
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  Loader2,
  Users,
  ChevronDown,
} from 'lucide-react';

const COURSES = [
  'AI',
  'UI/UX',
  'Cyber Security',
  'Fullstack Development',
  'Product Management',
  'Customer Success and Operations',
  'Graphics Design',
  'Video Editing',
] as const;

type FormValues = {
  name: string;
  phone: string;
  email: string;
  course: string;
};

type SpotStatus = {
  maxSpots: number;
  spotsTaken: number;
  spotsRemaining: number;
  isFull: boolean;
};

type SubmissionResult = {
  status: 'winner' | 'waitlist';
  spotNumber: number | null;
  name: string;
  course: string;
  email: string;
};

const validationSchema = yup.object().shape({
  name: yup.string().trim().min(2, 'Enter your full name').required('Name is required'),
  phone: yup
    .string()
    .trim()
    .min(7, 'Enter a valid phone number')
    .max(20, 'Phone number is too long')
    .required('Phone number is required'),
  email: yup
    .string()
    .trim()
    .email('Enter a valid email address')
    .required('Email is required'),
  course: yup
    .string()
    .oneOf<string>([...COURSES], 'Please choose a course')
    .required('Please select a course'),
});

export default function TakeoverSummitForm() {
  const [spotStatus, setSpotStatus] = useState<SpotStatus>({
    maxSpots: 5,
    spotsTaken: 0,
    spotsRemaining: 5,
    isFull: false,
  });
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      course: '',
    },
  });

  useEffect(() => {
    let active = true;
    async function fetchStatus() {
      try {
        const res = await fetch('/api/takeoversummit', { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        if (active) {
          setSpotStatus({
            maxSpots: data.maxSpots ?? 5,
            spotsTaken: data.spotsTaken ?? 0,
            spotsRemaining: data.spotsRemaining ?? 5,
            isFull: Boolean(data.isFull),
          });
        }
      } catch (err) {
        console.error('Failed to load spot count:', err);
      } finally {
        if (active) setLoadingStatus(false);
      }
    }
    fetchStatus();
    return () => {
      active = false;
    };
  }, []);

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/takeoversummit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 409 && data.duplicate) {
        toast.info(data.message || 'You have already registered with this email.');
        return;
      }

      if (!res.ok || !data.success) {
        toast.error(data.error || 'Submission failed. Please try again.');
        return;
      }

      const remaining = Number(data.spotsRemaining ?? 0);
      setSpotStatus((prev) => ({
        ...prev,
        spotsRemaining: remaining,
        spotsTaken: prev.maxSpots - remaining,
        isFull: remaining === 0,
      }));

      setResult({
        status: data.status,
        spotNumber: data.spotNumber,
        name: values.name,
        course: values.course,
        email: values.email,
      });

      if (data.status === 'winner') {
        toast.success('40% discount spot claimed!');
      } else {
        toast.success('You have been added to the waitlist!');
      }
    } catch (err) {
      console.error(err);
      toast.error('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Subtle Brand Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-brandPurple/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-brandYellow/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Top Badge & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brandYellow/40 bg-brandYellow/10 text-brandYellow text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5">
            <Sparkles className="w-4 h-4" />
            Takeover Summit Exclusive
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-4">
            {spotStatus.isFull ? (
              <>
                Join the Next Cohort{' '}
                <span className="text-brandYellow">Waitlist</span>
              </>
            ) : (
              <>
                Claim <span className="text-brandYellow">40% Off</span> the Next
                Cohort
              </>
            )}
          </h1>

          <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto">
            {spotStatus.isFull
              ? 'All 5 summit discount spots have been claimed! Drop your details below to get priority access when the next cohort opens.'
              : 'Thanks for attending the AI & Global Tech Career session! The first 5 students to apply get 40% off our next cohort.'}
          </p>
        </motion.div>

        {/* Live Spot Counter Bar */}
        {!result && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`mb-8 rounded-2xl border p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
              spotStatus.isFull
                ? 'border-brandPurple/40 bg-brandPurple/10'
                : 'border-brandGreen/40 bg-brandGreen/10'
            }`}
          >
            <div className="flex items-center gap-3">
              {spotStatus.isFull ? (
                <Users className="w-5 h-5 text-brandPurple shrink-0" />
              ) : (
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandGreen opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brandGreen" />
                </span>
              )}
              <div>
                <p className="font-bold text-sm sm:text-base text-white">
                  {loadingStatus
                    ? 'Checking available spots...'
                    : spotStatus.isFull
                      ? 'All 5 discount spots claimed — Waitlist Open'
                      : `${spotStatus.spotsRemaining} of ${spotStatus.maxSpots} discount ${
                          spotStatus.spotsRemaining === 1 ? 'spot' : 'spots'
                        } remaining`}
                </p>
                <p className="text-xs text-white/65">
                  {spotStatus.isFull
                    ? 'Register below to be notified first for the next cohort.'
                    : 'First come, first served. Once filled, new signups move to the waitlist.'}
                </p>
              </div>
            </div>

            {/* 5 Visual Slot Dots */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: spotStatus.maxSpots }).map((_, idx) => {
                const isTaken = idx < spotStatus.spotsTaken;
                return (
                  <span
                    key={idx}
                    title={isTaken ? `Spot ${idx + 1}: Claimed` : `Spot ${idx + 1}: Open`}
                    className={`h-2.5 w-7 rounded-full transition-colors ${
                      isTaken ? 'bg-white/25' : 'bg-brandYellow'
                    }`}
                  />
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Confirmation Screen OR Form Card */}
        {result ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-md p-8 sm:p-10 text-center"
          >
            <div
              className={`mx-auto mb-5 w-16 h-16 rounded-2xl flex items-center justify-center ${
                result.status === 'winner'
                  ? 'bg-brandGreen/20 text-brandGreen'
                  : 'bg-brandPurple/20 text-brandPurple'
              }`}
            >
              {result.status === 'winner' ? (
                <CheckCircle2 className="w-9 h-9" />
              ) : (
                <Clock className="w-9 h-9" />
              )}
            </div>

            {result.status === 'winner' ? (
              <>
                <span className="inline-block px-3 py-1 rounded-full bg-brandYellow text-black text-xs font-extrabold uppercase tracking-wider mb-3">
                  Spot #{result.spotNumber} of 5 • 40% Off Locked In
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                  Congratulations, {result.name}!
                </h2>
                <p className="text-white/75 text-base max-w-md mx-auto mb-6">
                  You&apos;ve secured one of the 5 Takeover Summit{' '}
                  <strong className="text-white">40% discount</strong> spots for{' '}
                  <strong className="text-brandYellow">{result.course}</strong>.
                  Our team will reach out to you shortly via email and phone.
                </p>
              </>
            ) : (
              <>
                <span className="inline-block px-3 py-1 rounded-full bg-brandPurple text-white text-xs font-extrabold uppercase tracking-wider mb-3">
                  Waitlist Confirmed
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                  You&apos;re on the Waitlist, {result.name}!
                </h2>
                <p className="text-white/75 text-base max-w-md mx-auto mb-6">
                  All 5 discount spots were claimed just before your entry, so
                  we&apos;ve added you to our priority waitlist for{' '}
                  <strong className="text-brandYellow">{result.course}</strong>.
                  We&apos;ll reach out as soon as the next cohort opens!
                </p>
              </>
            )}

            <div className="rounded-2xl bg-black/50 border border-white/10 p-4 text-left text-sm space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between gap-4">
                <span className="text-white/50">Name</span>
                <span className="font-medium text-white">{result.name}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-white/50">Email</span>
                <span className="font-medium text-white truncate">
                  {result.email}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-white/50">Selected Course</span>
                <span className="font-semibold text-brandYellow">
                  {result.course}
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 space-y-6"
          >
            {/* Full Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/90"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="e.g. Toluwanimi Adeyemi"
                className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-brandYellow transition-colors"
                {...register('name')}
              />
              {errors.name && (
                <p className="text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white/90"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="e.g. 0801 234 5678"
                  className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-brandYellow transition-colors"
                  {...register('phone')}
                />
                {errors.phone && (
                  <p className="text-xs text-red-400">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/90"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-brandYellow transition-colors"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Course Selection */}
            <div className="space-y-2">
              <label
                htmlFor="course"
                className="block text-sm font-medium text-white/90"
              >
                Course You Would Like to Study
              </label>
              <div className="relative">
                <select
                  id="course"
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-white/15 bg-black/80 px-4 py-3 pr-10 text-white outline-none focus:border-brandYellow transition-colors cursor-pointer"
                  {...register('course')}
                >
                  <option value="" disabled className="bg-black text-white/50">
                    Select a course
                  </option>
                  {COURSES.map((course) => (
                    <option
                      key={course}
                      value={course}
                      className="bg-black text-white"
                    >
                      {course}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
              </div>
              {errors.course && (
                <p className="text-xs text-red-400">{errors.course.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-brandYellow text-black font-bold text-base sm:text-lg py-3.5 px-6 hover:opacity-90 disabled:opacity-60 transition-opacity cursor-pointer"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : spotStatus.isFull ? (
                <>
                  Join the Cohort Waitlist
                  <ArrowRight className="w-5 h-5" />
                </>
              ) : (
                <>
                  Claim My 40% Discount
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
