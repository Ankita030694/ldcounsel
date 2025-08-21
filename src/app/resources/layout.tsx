import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Resources | LD Counsels',
  description: 'Expert legal insights, guidance, and comprehensive resources to help you navigate the complex world of law. Stay updated with the latest legal developments.',
  keywords: 'legal resources, legal insights, law blog, legal guidance, legal articles',
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {children}
    </div>
  );
} 