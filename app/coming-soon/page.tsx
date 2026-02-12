"use client"

import React, { useEffect, useState } from 'react'



const ComingSoon = () => {
    const LAUNCH_DATE = new Date("2026-02-19T00:00:00Z").getTime();

    const calculateTimeLeft = () => {
        const difference = LAUNCH_DATE - new Date().getTime();

        if (difference <= 0) {
            return null;
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        }
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <main className="relative flex items-center justify-center min-h-screen w-screen overflow-hidden px-6">

            <div className="text-center w-full max-w-4xl">

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brandPurple tracking-tight">
                    Launching Soon
                </h1>

                <p className="mt-4 text-gray-600 text-base sm:text-lg">
                    Something amazing is on the way.
                </p>

                <div className="
      grid 
      grid-cols-2 
      sm:flex 
      sm:flex-wrap 
      sm:justify-center 
      gap-4 
      sm:gap-6 
      mt-10
    ">

                    {[
                        { label: "Days", value: timeLeft?.days || 0 },
                        { label: "Hours", value: timeLeft?.hours || 0 },
                        { label: "Minutes", value: timeLeft?.minutes || 0 },
                        { label: "Seconds", value: timeLeft?.seconds || 0 },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="
            flex flex-col items-center justify-center
            w-full sm:w-24
            h-24
            bg-brandPurple text-black
            rounded-2xl shadow-lg
            transition-transform duration-300
            hover:scale-110
          "
                        >
                            <span className="text-2xl sm:text-3xl font-bold">
                                {item.value.toString().padStart(2, "0")}
                            </span>
                            <span className="text-xs sm:text-sm mt-1 opacity-80">
                                {item.label}
                            </span>
                        </div>
                    ))}

                </div>

            </div>
        </main>


    )
}

export default ComingSoon