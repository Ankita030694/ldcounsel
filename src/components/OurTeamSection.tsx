'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserTie, 
  faGraduationCap, 
  faBriefcase,
  faAward,
  faHandshake,
  faLightbulb,
  faChartLine,
  faShieldAlt,
  faBalanceScale,
  faUsers,
  faFileAlt,
  faEdit
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';

const iconMap: Record<string, any> = {
  faUserTie, faGraduationCap, faBriefcase, faAward, faHandshake, faLightbulb,
  faChartLine, faShieldAlt, faBalanceScale, faUsers, faFileAlt, faEdit
};

export default function OurTeamSection() {
  const [expandedMembers, setExpandedMembers] = useState<number[]>([]);

  const toggleMemberExpansion = (index: number) => {
    setExpandedMembers(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const q = query(collection(db, 'team'), orderBy('priority', 'asc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => {
          const docData = doc.data();
          return {
            id: doc.id,
            ...docData,
            concisePoints: docData.concisePoints || [],
            highlights: docData.highlights || [],
            icon: iconMap[docData.iconName] || faUserTie
          };
        });
        setTeamMembers(data);
      } catch (error) {
        console.error('Error fetching team members:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  if (loading) {
    return (
      <section className="bg-gradient-to-br from-[#102028] via-[#1a2a35] to-[#102028] py-12 sm:py-16 lg:py-20 flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F8F1E6]"></div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-[#102028] via-[#1a2a35] to-[#102028] text-[#F8F1E6] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#F8F1E6] rounded-full opacity-5 blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#F8F1E6] rounded-full opacity-5 blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-gradient-to-r from-[#F8F1E6] to-[#F8F1E6]/80 text-[#102028] px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Meet Our Team
          </div>
          <h2 className="font-playfair text-[#F8F1E6] text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-[#F8F1E6] to-[#F8F1E6]/70 bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#F8F1E6] to-transparent mx-auto mb-6 sm:mb-8"></div>
          <p className="text-[#F8F1E6] text-base sm:text-lg leading-relaxed opacity-95 max-w-3xl mx-auto">
            A diverse team of legal professionals committed to delivering exceptional results through expertise, integrity, and unwavering dedication to client success.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-[#F8F1E6]/20 hover:border-[#F8F1E6]/40"
            >
              {/* Member Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#102028] to-[#102028]/80 flex items-center justify-center">
                  <FontAwesomeIcon 
                    icon={member.icon} 
                    className="text-[#F8F1E6] text-4xl sm:text-5xl opacity-60 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Placeholder for actual image - uncomment when images are available */}
                {/* <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                /> */}
                
                {/* Image overlay with role */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#102028] via-[#102028]/80 to-transparent p-4">
                  <p className="text-[#F8F1E6] text-sm sm:text-base font-medium">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Member Information */}
              <div className="p-6 sm:p-8">
                {/* Member Name */}
                <h3 className="font-semibold text-[#102028] text-xl sm:text-2xl mb-4 group-hover:text-[#102028]/80 transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Concise Points (Always Visible) */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-medium text-[#102028] text-sm sm:text-base">Key Expertise:</h4>
                  <ul className="space-y-2">
                    {member.concisePoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#102028] opacity-70 text-xs sm:text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => toggleMemberExpansion(index)}
                  className="text-[#102028] text-sm font-medium hover:text-[#102028]/70 transition-colors duration-300 border-b border-[#102028]/30 hover:border-[#102028] pb-1"
                >
                  {expandedMembers.includes(index) ? 'Read Less' : 'Read More'}
                </button>

                {/* Expanded Content */}
                {expandedMembers.includes(index) && (
                  <div className="mt-6 space-y-4 animate-fadeIn">
                    {/* Member Description */}
                    <div>
                      <h4 className="font-medium text-[#102028] text-sm sm:text-base mb-2">About:</h4>
                      <p className="text-[#102028] text-sm sm:text-base leading-relaxed opacity-80">
                        {member.description}
                      </p>
                    </div>

                    {/* Detailed Highlights */}
                    <div>
                      <h4 className="font-medium text-[#102028] text-sm sm:text-base mb-2">Detailed Highlights:</h4>
                      <ul className="space-y-1">
                        {member.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#102028] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-[#102028] opacity-70 text-xs sm:text-sm leading-relaxed">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

       
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
} 