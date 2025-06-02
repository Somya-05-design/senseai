
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Building, Globe, MapPin, Users } from 'lucide-react';

interface OrganizationData {
  organizationType: string;
  existingOrganization: string;
  organizationName: string;
  organizationWebsite: string;
  organizationAddress: string;
  organizationSize: string;
  organizationIndustry: string;
  organizationDescription: string;
}

interface OrganizationSectionProps {
  formData: OrganizationData;
  onInputChange: (field: string, value: string) => void;
}

export const OrganizationSection: React.FC<OrganizationSectionProps> = ({
  formData,
  onInputChange
}) => {
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
    <div className="space-y-4">
      <Label className="text-sm font-medium text-gray-700">Organization Setup</Label>
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <RadioGroup
          value={formData.organizationType}
          onValueChange={(value) => onInputChange('organizationType', value)}
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
                  onValueChange={(value) => onInputChange('existingOrganization', value)}
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
                    onChange={(e) => onInputChange('organizationName', e.target.value)}
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
                    onChange={(e) => onInputChange('organizationWebsite', e.target.value)}
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
                    onChange={(e) => onInputChange('organizationAddress', e.target.value)}
                    placeholder="Organization address"
                    className="pl-10 h-10 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                    required={formData.organizationType === 'create'}
                  />
                </div>

                {/* Organization Size */}
                <div className="space-y-2">
                  <Select
                    value={formData.organizationSize}
                    onValueChange={(value) => onInputChange('organizationSize', value)}
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
                    onValueChange={(value) => onInputChange('organizationIndustry', value)}
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
                    onChange={(e) => onInputChange('organizationDescription', e.target.value)}
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
  );
};
