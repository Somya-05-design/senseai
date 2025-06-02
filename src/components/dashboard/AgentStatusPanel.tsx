
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Activity, Pause, Play } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  status: 'active' | 'idle' | 'paused';
  lastActivity: string;
  tasksCompleted: number;
}

const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'Orchestrator Agent',
    status: 'active',
    lastActivity: '2 minutes ago',
    tasksCompleted: 142
  },
  {
    id: '2', 
    name: 'Task Automation Agent',
    status: 'active',
    lastActivity: '1 minute ago',
    tasksCompleted: 89
  },
  {
    id: '3',
    name: 'Cost Forecasting Agent', 
    status: 'idle',
    lastActivity: '15 minutes ago',
    tasksCompleted: 67
  },
  {
    id: '4',
    name: 'LLM Selection Agent',
    status: 'active',
    lastActivity: '30 seconds ago',
    tasksCompleted: 201
  },
  {
    id: '5',
    name: 'ROI Analysis Agent',
    status: 'paused',
    lastActivity: '1 hour ago',
    tasksCompleted: 45
  }
];

export const AgentStatusPanel = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'idle':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'paused':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>;
      case 'idle':
        return <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>;
      case 'paused':
        return <div className="w-2 h-2 bg-gray-400 rounded-full"></div>;
      default:
        return <div className="w-2 h-2 bg-gray-400 rounded-full"></div>;
    }
  };

  return (
    <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl shadow-xl p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Agent Status</h2>
        <Activity className="h-4 w-4 text-green-600" />
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-3 pr-2">
          {mockAgents.map((agent) => (
            <div key={agent.id} className="bg-white/50 rounded-lg p-3 border border-white/30">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-xs">{agent.name}</h3>
                    <p className="text-xs text-gray-500">{agent.tasksCompleted} tasks</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {getStatusIcon(agent.status)}
                  <Badge variant="outline" className={`text-xs px-1 py-0 ${getStatusColor(agent.status)}`}>
                    {agent.status}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">{agent.lastActivity}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-5 w-5 p-0 hover:bg-green-50"
                >
                  {agent.status === 'paused' ? (
                    <Play className="h-3 w-3 text-green-600" />
                  ) : (
                    <Pause className="h-3 w-3 text-gray-600" />
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="flex justify-between text-xs">
          <span className="text-gray-600">Total Active:</span>
          <span className="font-medium text-green-600">
            {mockAgents.filter(a => a.status === 'active').length}
          </span>
        </div>
        <div className="flex justify-between text-xs mt-1">
          <span className="text-gray-600">Performance:</span>
          <span className="font-medium text-green-600">98.5%</span>
        </div>
      </div>
    </div>
  );
};
