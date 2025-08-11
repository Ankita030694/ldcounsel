'use client';

import { useState, useEffect } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold">
      {count}{suffix}
    </span>
  );
}

export default function CounterSection() {
  const stats = [
    {
      label: 'Services Offered',
      value: 1000,
      suffix: '+'
    },
    {
      label: 'Customers Served',
      value: 100,
      suffix: '%'
    },
    {
      label: 'Satisfaction Guaranteed',
      value: 100,
      suffix: '%'
    },
    {
      label: 'Customers Ratings',
      value: 9.6,
      suffix: '/10'
    }
  ];

  return (
    <section className="bg-[#F8F1E6] py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:flex lg:justify-between items-center gap-4 sm:gap-6 lg:gap-0">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-[#102028] mb-2">
                <Counter 
                  end={stat.value} 
                  suffix={stat.suffix}
                  duration={2000 + index * 200}
                />
              </div>
              <h3 className="text-[#102028] text-xs sm:text-sm lg:text-lg xl:text-xl font-medium leading-tight">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 