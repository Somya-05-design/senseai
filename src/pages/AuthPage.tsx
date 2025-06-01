import React, { useState } from 'react';
import { AuthWrapper } from '@/components/auth/AuthWrapper';
import { LoginForm } from '@/components/auth/LoginForm';
import { SignupForm } from '@/components/auth/SignupForm';
const AuthPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/30 to-pink-600/30 rounded-full blur-3xl"></div>
      </div>

      <AuthWrapper>
        <div className="relative w-full max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isLoginMode ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-gray-600">
              {isLoginMode ? 'Sign in to your account to continue' : 'Join us and start your journey today'}
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
            <button onClick={() => setIsLoginMode(true)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${isLoginMode ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}>
              Sign In
            </button>
            <button onClick={() => setIsLoginMode(false)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${!isLoginMode ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}>
              Sign Up
            </button>
          </div>

          {/* Form Container */}
          <div className="relative overflow-hidden">
            <div className={`transition-transform duration-500 ease-in-out ${isLoginMode ? 'translate-x-0' : '-translate-x-full'}`}>
              <LoginForm />
            </div>
            
            <div className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out ${isLoginMode ? 'translate-x-full' : 'translate-x-0'}`}>
              <SignupForm />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {isLoginMode ? "Don't have an account? " : "Already have an account? "}
              <button onClick={toggleMode} className="font-medium text-green-600 hover:text-green-500 transition-colors">
                {isLoginMode ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </AuthWrapper>
    </div>;
};
export default AuthPage;