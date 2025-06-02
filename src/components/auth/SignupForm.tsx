
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PersonalInfoSection } from './PersonalInfoSection';
import { RoleSection } from './RoleSection';
import { OrganizationSection } from './OrganizationSection';

export const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    role: '',
    organizationType: 'join', // 'join' or 'create'
    existingOrganization: '',
    // New organization details
    organizationName: '',
    organizationWebsite: '',
    organizationAddress: '',
    organizationSize: '',
    organizationIndustry: '',
    organizationDescription: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Signup attempt:', formData);
    
    // Redirect to dashboard
    navigate('/dashboard');
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <PersonalInfoSection
        formData={{
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone
        }}
        showPassword={showPassword}
        onInputChange={handleInputChange}
        onTogglePassword={() => setShowPassword(!showPassword)}
      />

      {/* Role Selection */}
      <RoleSection
        selectedRole={formData.role}
        onRoleChange={(value) => handleInputChange('role', value)}
      />

      {/* Organization Setup */}
      <OrganizationSection
        formData={{
          organizationType: formData.organizationType,
          existingOrganization: formData.existingOrganization,
          organizationName: formData.organizationName,
          organizationWebsite: formData.organizationWebsite,
          organizationAddress: formData.organizationAddress,
          organizationSize: formData.organizationSize,
          organizationIndustry: formData.organizationIndustry,
          organizationDescription: formData.organizationDescription
        }}
        onInputChange={handleInputChange}
      />

      {/* Let's Start Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Setting up your account...</span>
          </div>
        ) : (
          "Let's Start"
        )}
      </Button>
    </form>
  );
};
