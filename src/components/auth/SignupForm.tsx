
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Eye, EyeOff, User, Mail, Lock, Phone, Building, Globe, MapPin, Users } from 'lucide-react';

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

  const roles = [
    'Developer',
    'Businessman',
    'Employee',
    'Manager',
    'Designer',
    'Consultant',
    'CEO/Founder',
    'Product Manager',
    'Data Scientist',
    'Marketing Specialist',
    'Sales Representative',
    'Other'
  ];

  const existingOrganizations = [
    'Tech Corp',
    'Digital Solutions Inc',
    'Innovation Labs',
    'StartupXYZ',
    'Enterprise Solutions',
    'AI Dynamics',
    'Future Systems'
  ];

  const organizationSizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees'
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'E-commerce',
    'Manufacturing',
    'Consulting',
    'Media & Entertainment',
    'Real Estate',
    'Non-profit',
    'Other'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
          Full Name
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            placeholder="Enter your full name"
            className="pl-10 h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email-signup" className="text-sm font-medium text-gray-700">
          Email Address
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            id="email-signup"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="Enter your email"
            className="pl-10 h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label htmlFor="password-signup" className="text-sm font-medium text-gray-700">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            id="password-signup"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            placeholder="Create a password"
            className="pl-10 pr-10 h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Contact Information
        </Label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="Enter your phone number"
            className="pl-10 h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      {/* Role Selection Bar */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Your Role</Label>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
            <SelectTrigger className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 bg-white">
              <SelectValue placeholder="Select your professional role" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {roles.map((role) => (
                <SelectItem key={role} value={role.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Organization Selection */}
      <div className="space-y-4">
        <Label className="text-sm font-medium text-gray-700">Organization Setup</Label>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <RadioGroup
            value={formData.organizationType}
            onValueChange={(value) => handleInputChange('organizationType', value)}
            className="space-y-4"
          >
            {/* Join Existing Organization */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="join" id="join" />
                <Label htmlFor="join" className="text-sm font-medium">
                  Join existing organization
                </Label>
              </div>
              {formData.organizationType === 'join' && (
                <div className="ml-6 space-y-3">
                  <Select
                    value={formData.existingOrganization}
                    onValueChange={(value) => handleInputChange('existingOrganization', value)}
                  >
                    <SelectTrigger className="h-10 border-gray-200 bg-white">
                      <SelectValue placeholder="Select organization" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {existingOrganizations.map((org) => (
                        <SelectItem key={org} value={org.toLowerCase().replace(/\s+/g, '-')}>
                          {org}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {/* Create New Organization */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="create" id="create" />
                <Label htmlFor="create" className="text-sm font-medium">
                  Create new organization
                </Label>
              </div>
              {formData.organizationType === 'create' && (
                <div className="ml-6 space-y-4">
                  {/* Organization Name */}
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="text"
                      value={formData.organizationName}
                      onChange={(e) => handleInputChange('organizationName', e.target.value)}
                      placeholder="Organization name"
                      className="pl-10 h-10 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                      required={formData.organizationType === 'create'}
                    />
                  </div>

                  {/* Organization Website */}
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="url"
                      value={formData.organizationWebsite}
                      onChange={(e) => handleInputChange('organizationWebsite', e.target.value)}
                      placeholder="Website URL (optional)"
                      className="pl-10 h-10 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Organization Address */}
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="text"
                      value={formData.organizationAddress}
                      onChange={(e) => handleInputChange('organizationAddress', e.target.value)}
                      placeholder="Organization address"
                      className="pl-10 h-10 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                      required={formData.organizationType === 'create'}
                    />
                  </div>

                  {/* Organization Size */}
                  <div className="space-y-2">
                    <Select
                      value={formData.organizationSize}
                      onValueChange={(value) => handleInputChange('organizationSize', value)}
                    >
                      <SelectTrigger className="h-10 border-gray-200 bg-white">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        <SelectValue placeholder="Organization size" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {organizationSizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Industry */}
                  <div className="space-y-2">
                    <Select
                      value={formData.organizationIndustry}
                      onValueChange={(value) => handleInputChange('organizationIndustry', value)}
                    >
                      <SelectTrigger className="h-10 border-gray-200 bg-white">
                        <SelectValue placeholder="Industry" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry.toLowerCase()}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Organization Description */}
                  <div className="space-y-2">
                    <Input
                      type="text"
                      value={formData.organizationDescription}
                      onChange={(e) => handleInputChange('organizationDescription', e.target.value)}
                      placeholder="Brief description of your organization"
                      className="h-10 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              )}
            </div>
          </RadioGroup>
        </div>
      </div>

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
