
import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface RoleSectionProps {
  selectedRole: string;
  onRoleChange: (role: string) => void;
}

export const RoleSection: React.FC<RoleSectionProps> = ({
  selectedRole,
  onRoleChange
}) => {
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

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-gray-700">Your Role</Label>
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <Select value={selectedRole} onValueChange={onRoleChange}>
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
  );
};
