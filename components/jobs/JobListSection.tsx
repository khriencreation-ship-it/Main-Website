'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { FaLocationDot, FaBriefcase, FaClock, FaArrowRight, FaUserGroup, FaCalendarDays } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';
import ApplyModal from './ApplyModal';

interface JobListing {
  id: string;
  title: string;
  department: string;
  category: string;
  location: string;
  type: string;
  closingDate?: string;
  image: string;
  shortDesc: string;
  responsibilities: string[];
  requirements: string[];
}

const JOBS_DATA: JobListing[] = [
  {
    id: 'community-manager',
    title: 'Community Manager',
    department: 'Marketing & Growth',
    category: 'Community',
    location: 'Remote (Lagos, Nigeria)',
    type: 'Full-time',
    closingDate: 'Friday, 25th September 2026',
    image: '/community manager website.jpg',
    shortDesc:
      'We are looking for a vibrant, strategic, and proactive Community Manager to lead engagement, nurture our creator ecosystem, and scale brand advocacy across digital platforms.',
    responsibilities: [
      'Build, moderate, and nurture online community spaces across Instagram and Whatsapp.',
      'Organize and host digital events, Q&A sessions, webinars, and interactive community programs.',
      'Analyze engagement metrics, community sentiment, and feedback to optimize community initiatives.',
      'Collaborate closely with design, product, and marketing teams to produce high-impact brand content.',
    ],
    requirements: [
      '2+ years of proven experience in Community Management, Social Media Strategy, or Brand Advocacy.',
      'Exceptional written, verbal, and interpersonal communication skills.',
      'Demonstrated experience building active online communities in tech, creative agencies or any brand.',
      'Self-driven mindset with strong organizational skills and attention to detail.',
    ],
  },
];

const CATEGORIES = ['All Roles', 'Community'];

const JobListSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Roles');
  const [activeModalJob, setActiveModalJob] = useState<JobListing | null>(null);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const filteredJobs = JOBS_DATA.filter(
    (job) => selectedCategory === 'All Roles' || job.category === selectedCategory
  );

  return (
    <section className="max-w-360 mx-auto my-12 px-4 sm:px-6">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-brandGreen text-black shadow-lg shadow-brandGreen/20 scale-105'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Jobs Container */}
      <div className="space-y-8 max-w-5xl mx-auto">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image Section */}
                <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[100%] bg-zinc-800 overflow-hidden">
                  <Image
                    src={job.image}
                    alt={job.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-zinc-900/60" />
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    <span className="px-3 py-1 rounded-full bg-brandYellow text-black text-xs font-black uppercase tracking-wider shadow-md w-fit">
                      Hiring Now
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold text-zinc-400 mb-3">
                      <span className="flex items-center gap-1.5 bg-zinc-800 px-3 py-1 rounded-full text-brandGreen font-bold">
                        <FaUserGroup /> {job.department}
                      </span>
                      <span className="flex items-center gap-1.5 bg-zinc-800 px-3 py-1 rounded-full">
                        <FaLocationDot /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 bg-zinc-800 px-3 py-1 rounded-full">
                        <FaClock /> {job.type}
                      </span>
                      {job.closingDate && (
                        <span className="flex items-center gap-1.5 bg-brandYellow/15 border border-brandYellow/30 px-3 py-1 rounded-full text-brandYellow font-extrabold">
                          <FaCalendarDays className="text-brandYellow" /> Application Closes: {job.closingDate}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-brandGreen transition-colors">
                      {job.title}
                    </h2>

                    {/* Short Description */}
                    <p className="text-zinc-300 mt-3 text-base sm:text-lg leading-relaxed">
                      {job.shortDesc}
                    </p>
                  </div>

                  {/* Expanded details view */}
                  {expandedJobId === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6 border-t border-zinc-800/80 pt-6 mt-4"
                    >
                      <div>
                        <h4 className="text-sm uppercase tracking-wider font-extrabold text-brandYellow mb-3">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-300">
                              <FaCheckCircle className="text-brandGreen shrink-0 mt-1 text-sm" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm uppercase tracking-wider font-extrabold text-brandYellow mb-3">
                          Requirements:
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-300">
                              <FaCheckCircle className="text-brandPurple shrink-0 mt-1 text-sm" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800/80 pt-6">
                    <button
                      onClick={() =>
                        setExpandedJobId(expandedJobId === job.id ? null : job.id)
                      }
                      className="text-sm font-semibold text-zinc-400 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
                    >
                      {expandedJobId === job.id ? 'Hide Details' : 'View Full Details & Requirements'}
                    </button>

                    <button
                      onClick={() => setActiveModalJob(job)}
                      className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-brandYellow hover:bg-amber-400 text-black font-extrabold text-base transition-all duration-300 hover:scale-105 shadow-lg shadow-brandYellow/20 cursor-pointer"
                    >
                      <span>Apply Now</span>
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-16 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">No Active Openings in {selectedCategory}</h3>
            <p className="text-zinc-400 max-w-md mx-auto mb-6">
              We are always looking for exceptional talent. If you don&apos;t see a matching role, feel free to send us your CV anyway!
            </p>
            <button
              onClick={() => setSelectedCategory('All Roles')}
              className="px-6 py-2.5 rounded-full bg-brandGreen text-black font-bold"
            >
              View All Open Roles
            </button>
          </div>
        )}
      </div>

      {/* Application Modal */}
      {activeModalJob && (
        <ApplyModal
          isOpen={!!activeModalJob}
          onClose={() => setActiveModalJob(null)}
          jobTitle={activeModalJob.title}
        />
      )}
    </section>
  );
};

export default JobListSection;
