'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IoClose } from 'react-icons/io5';

type ApplyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
};

export default function ApplyModal({ isOpen, onClose, jobTitle }: ApplyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-3xl p-4 sm:p-8 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-4 px-2">
              <div>
                <span className="text-xs uppercase tracking-widest text-brandYellow font-extrabold">
                  Official Application Form
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                  Apply for {jobTitle}
                </h2>
              </div>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all cursor-pointer"
              >
                <IoClose size={26} />
              </button>
            </div>

            {/* Google Form Iframe container */}
            <div className="flex-1 w-full bg-white rounded-2xl overflow-hidden shadow-inner">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSezTQOPNxYBL_S85Sm3vEJdfDuFR81wrB2cVrNDcXtZw2pQwQ/viewform?embedded=true"
                width="100%"
                height="100%"
                className="w-full h-[65vh] sm:h-[72vh] border-0 rounded-2xl"
                title={`Application Form - ${jobTitle}`}
              >
                Loading form…
              </iframe>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
