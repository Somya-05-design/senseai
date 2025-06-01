
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { DashboardHome } from '@/components/dashboard/DashboardHome';
import { AgentsPage } from '@/components/dashboard/AgentsPage';
import { OrganisationPage } from '@/components/dashboard/OrganisationPage';
import { AboutPage } from '@/components/dashboard/AboutPage';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/organisation" element={<OrganisationPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
