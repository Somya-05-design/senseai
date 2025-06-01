import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Eye, EyeOff, User, Mail, Lock, Phone, Building } from 'lucide-react';

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
    newOrganization: ''
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
    'Other'
  ];

  const existingOrganizations = [
    'Tech Corp',
    'Digital Solutions Inc',
    'Innovation Labs',
    'StartupXYZ',
    'Enterprise Solutions'
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

      {/* Role Selection */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Role</Label>
        <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
          <SelectTrigger className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role} value={role.toLowerCase()}>
                {role}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Organization Selection */}
      <div className="space-y-4">
        <Label className="text-sm font-medium text-gray-700">Organization</Label>
        <RadioGroup
          value={formData.organizationType}
          onValueChange={(value) => handleInputChange('organizationType', value)}
          className="space-y-3"
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
              <div className="ml-6">
                <Select
                  value={formData.existingOrganization}
                  onValueChange={(value) => handleInputChange('existingOrganization', value)}
                >
                  <SelectTrigger className="h-10 border-gray-200">
                    <SelectValue placeholder="Select organization" />
                  </SelectTrigger>
                  <SelectContent>
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
              <div className="ml-6">
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    value={formData.newOrganization}
                    onChange={(e) => handleInputChange('newOrganization', e.target.value)}
                    placeholder="Enter organization name"
                    className="pl-10 h-10 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
            )}
          </div>
        </RadioGroup>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Creating account...</span>
          </div>
        ) : (
          'Create Account'
        )}
      </Button>
    </form>
  );
};
