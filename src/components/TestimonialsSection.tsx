'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "CEO",
      company: "TechCorp Solutions",
      content: "LD Counsels provided exceptional legal guidance during our merger process. Their expertise in corporate law and attention to detail ensured a smooth transaction. Highly recommended for any complex legal matters.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Managing Director",
      company: "Global Innovations Ltd",
      content: "The team at LD Counsels demonstrated outstanding professionalism and deep knowledge of intellectual property law. They successfully protected our innovations and helped us navigate complex legal challenges.",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Founder",
      company: "Startup Ventures",
      content: "Working with LD Counsels has been a game-changer for our startup. Their strategic legal advice and practical approach helped us scale while ensuring compliance. Truly partners in our success.",
      rating: 5
    },
    {
      id: 4,
      name: "Dr. Meera Singh",
      position: "Director",
      company: "Healthcare Systems",
      content: "LD Counsels' expertise in healthcare regulations and litigation was invaluable. They handled our complex legal matters with precision and always put our interests first. Exceptional service.",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-[#D4AF37]">
        ★
      </span>
    ));
  };

  return (
    <section className="bg-[#F8F1E6] py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
          <h2 className="font-playfair text-[#102028] text-xl sm:text-2xl lg:text-3xl xl:text-4xl mb-2 sm:mb-3 lg:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#102028] opacity-80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Trusted by leading companies and individuals for exceptional legal services and outstanding results.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 xl:p-12 border border-[#102028]/10 hover:shadow-xl transition-shadow duration-300">
            {/* Rating */}
            <div className="flex justify-center mb-3 sm:mb-4 lg:mb-6">
              {renderStars(testimonials[currentTestimonial].rating)}
            </div>

            {/* Content */}
            <blockquote className="text-[#102028] text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-4 sm:mb-6 lg:mb-8 italic text-center">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-[#102028] rounded-full flex items-center justify-center text-[#F8F1E6] font-bold text-base sm:text-lg lg:text-xl mr-2 sm:mr-3 lg:mr-4">
                {testimonials[currentTestimonial].name.charAt(0)}
              </div>
              <div className="text-center">
                <h4 className="font-medium text-[#102028] text-base sm:text-lg lg:text-xl">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-[#102028] opacity-70 text-xs sm:text-sm lg:text-base">
                  {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 lg:mt-12">
            <div className="flex space-x-2 sm:space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-[#102028]'
                      : 'bg-[#102028]/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-1 sm:left-2 lg:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#102028] text-[#F8F1E6] rounded-full flex items-center justify-center hover:bg-[#102028]/90 transition-colors duration-200 shadow-lg"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-1 sm:right-2 lg:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#102028] text-[#F8F1E6] rounded-full flex items-center justify-center hover:bg-[#102028]/90 transition-colors duration-200 shadow-lg"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
} 