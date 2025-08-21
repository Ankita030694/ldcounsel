'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSignOutAlt, 
  faNewspaper, 
  faChartBar,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/admin/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: faChartBar,
      current: pathname === '/admin/dashboard'
    },
    {
      name: 'Blogs',
      href: '/admin/blogs',
      icon: faNewspaper,
      current: pathname === '/admin/blogs'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F1E6] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#102028]"></div>
          <p className="mt-4 text-[#102028]">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render layout for login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#F8F1E6]">
      {/* Header */}
      <header className="bg-[#102028] text-[#F8F1E6] p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="font-playfair text-2xl font-semibold">LD Counsels Admin</h1>
            <p className="text-sm opacity-80">Welcome, {user?.email}</p>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => router.push(item.href)}
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 flex items-center ${
                    item.current
                      ? 'bg-[#F8F1E6] text-[#102028]'
                      : 'text-[#F8F1E6] hover:bg-[#F8F1E6]/10'
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="mr-2" />
                  {item.name}
                </button>
              ))}
            </nav>
            <button
              onClick={handleSignOut}
              className="bg-[#F8F1E6] text-[#102028] px-4 py-2 rounded-lg hover:bg-[#F8F1E6]/90 transition-colors duration-300 flex items-center"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Sign Out
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#F8F1E6] hover:text-[#F8F1E6]/80 transition-colors"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-[#F8F1E6]/20">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    router.push(item.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 flex items-center ${
                    item.current
                      ? 'bg-[#F8F1E6] text-[#102028]'
                      : 'text-[#F8F1E6] hover:bg-[#F8F1E6]/10'
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="mr-2" />
                  {item.name}
                </button>
              ))}
              <button
                onClick={handleSignOut}
                className="bg-[#F8F1E6] text-[#102028] px-4 py-2 rounded-lg hover:bg-[#F8F1E6]/90 transition-colors duration-300 flex items-center mt-4"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                Sign Out
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
} 