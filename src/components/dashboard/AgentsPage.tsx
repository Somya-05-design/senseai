
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Bot, Play, Pause, MoreVertical } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface Agent {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'idle' | 'paused';
  lastActivity: string;
  tasksCompleted: number;
  successRate: number;
  category: string;
}

const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'Orchestrator Agent',
    description: 'Coordinates and manages other AI agents for complex multi-step tasks',
    status: 'active',
    lastActivity: '2 minutes ago',
    tasksCompleted: 142,
    successRate: 98.5,
    category: 'Management'
  },
  {
    id: '2',
    name: 'Task Automation Agent',
    description: 'Automates repetitive tasks and workflows with high efficiency',
    status: 'active', 
    lastActivity: '1 minute ago',
    tasksCompleted: 89,
    successRate: 96.2,
    category: 'Automation'
  },
  {
    id: '3',
    name: 'Cost Forecasting Agent',
    description: 'Analyzes and predicts costs for AI operations and resource usage',
    status: 'idle',
    lastActivity: '15 minutes ago', 
    tasksCompleted: 67,
    successRate: 94.8,
    category: 'Analytics'
  },
  {
    id: '4',
    name: 'LLM Selection Agent',
    description: 'Chooses optimal language models for specific tasks and budgets',
    status: 'active',
    lastActivity: '30 seconds ago',
    tasksCompleted: 201,
    successRate: 99.1,
    category: 'Optimization'
  },
  {
    id: '5',
    name: 'ROI Analysis Agent',
    description: 'Calculates return on investment for AI implementations',
    status: 'paused',
    lastActivity: '1 hour ago',
    tasksCompleted: 45,
    successRate: 97.3,
    category: 'Analytics'
  },
  {
    id: '6',
    name: 'Data Processing Agent',
    description: 'Handles large-scale data processing and transformation tasks',
    status: 'active',
    lastActivity: '5 minutes ago',
    tasksCompleted: 156,
    successRate: 95.7,
    category: 'Data'
  }
];

export const AgentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [agents, setAgents] = useState(mockAgents);

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || agent.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const toggleAgentStatus = (agentId: string) => {
    setAgents(prevAgents =>
      prevAgents.map(agent =>
        agent.id === agentId
          ? {
              ...agent,
              status: agent.status === 'active' ? 'paused' : 'active',
              lastActivity: agent.status === 'active' ? agent.lastActivity : 'just now'
            }
          : agent
      )
    );
  };

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Agent Management</h1>
        <p className="text-gray-600">Monitor and control your AI agents from one central dashboard.</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl shadow-xl p-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-200 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={statusFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setStatusFilter('all')}
              className={statusFilter === 'all' ? 'bg-green-600 hover:bg-green-700' : ''}
            >
              All
            </Button>
            <Button
              variant={statusFilter === 'active' ? 'default' : 'outline'}
              onClick={() => setStatusFilter('active')}
              className={statusFilter === 'active' ? 'bg-green-600 hover:bg-green-700' : ''}
            >
              Active
            </Button>
            <Button
              variant={statusFilter === 'idle' ? 'default' : 'outline'}
              onClick={() => setStatusFilter('idle')}
              className={statusFilter === 'idle' ? 'bg-green-600 hover:bg-green-700' : ''}
            >
              Idle
            </Button>
            <Button
              variant={statusFilter === 'paused' ? 'default' : 'outline'}
              onClick={() => setStatusFilter('paused')}
              className={statusFilter === 'paused' ? 'bg-green-600 hover:bg-green-700' : ''}
            >
              Paused
            </Button>
          </div>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <div key={agent.id} className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                  <p className="text-sm text-gray-500">{agent.category}</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Configure</DropdownMenuItem>
                  <DropdownMenuItem>View Logs</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <p className="text-sm text-gray-600 mb-4">{agent.description}</p>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                {getStatusIcon(agent.status)}
                <Badge variant="outline" className={`text-xs ${getStatusColor(agent.status)}`}>
                  {agent.status}
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleAgentStatus(agent.id)}
                className="h-8 w-8 p-0 hover:bg-green-50"
              >
                {agent.status === 'paused' ? (
                  <Play className="h-4 w-4 text-green-600" />
                ) : (
                  <Pause className="h-4 w-4 text-gray-600" />
                )}
              </Button>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Tasks Completed:</span>
                <span className="font-medium">{agent.tasksCompleted}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Success Rate:</span>
                <span className="font-medium text-green-600">{agent.successRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Activity:</span>
                <span className="font-medium">{agent.lastActivity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAgents.length === 0 && (
        <div className="text-center py-12">
          <Bot className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No agents found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};
