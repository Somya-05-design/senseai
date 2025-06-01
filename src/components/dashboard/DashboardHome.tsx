
import React, { useState } from 'react';
import { ChatInterface } from './ChatInterface';
import { AgentStatusPanel } from './AgentStatusPanel';

export const DashboardHome = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Multi-Agent Dashboard</h1>
        <p className="text-gray-600">Interact with your AI agents and monitor their activity in real-time.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <ChatInterface />
        </div>

        {/* Agent Status Panel */}
        <div className="lg:col-span-1">
          <AgentStatusPanel />
        </div>
      </div>
    </div>
  );
};
