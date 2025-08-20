'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function AdminLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      // Redirect to admin dashboard on successful login
      router.push('/admin/dashboard');
    } catch (error: any) {
      console.error('Login error:', error);
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F1E6] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#102028]/10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#102028] rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon 
                icon={faShieldAlt} 
                className="text-[#F8F1E6] text-2xl" 
              />
            </div>
            <h1 className="font-playfair text-[#102028] text-2xl sm:text-3xl font-semibold mb-2">
              Admin Login
            </h1>
            <p className="text-[#102028] opacity-70 text-sm">
              Access the admin dashboard
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-[#102028] font-medium mb-2">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#102028]/20 rounded-lg focus:ring-2 focus:ring-[#102028] focus:border-[#102028] transition-all duration-200 bg-[#F8F1E6] text-[#102028]"
                placeholder="Enter admin email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-[#102028] font-medium mb-2">
                <FontAwesomeIcon icon={faLock} className="mr-2" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-[#102028]/20 rounded-lg focus:ring-2 focus:ring-[#102028] focus:border-[#102028] transition-all duration-200 bg-[#F8F1E6] text-[#102028]"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#102028] opacity-60 hover:opacity-100 transition-opacity"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-6 rounded-lg transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl ${
                isLoading 
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                  : 'bg-[#102028] text-[#F8F1E6] hover:bg-[#102028]/90'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-[#102028]/10">
            <p className="text-[#102028] text-xs opacity-60 text-center">
              Secure admin access for LD Counsels
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 