
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Zap, TrendingUp, Shield, Users, Globe } from 'lucide-react';

export const AboutPage = () => {
  const features = [
    {
      icon: Bot,
      title: 'Multi-Agent Orchestration',
      description: 'Coordinate multiple specialized AI agents to handle complex tasks with unprecedented efficiency and accuracy.',
      badge: 'Core Feature'
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'Reduce AI infrastructure costs by up to 60% through intelligent resource allocation and automated optimization.',
      badge: 'Cost Savings'
    },
    {
      icon: Zap,
      title: 'Real-time Performance',
      description: 'Monitor and analyze AI agent performance in real-time with comprehensive analytics and insights.',
      badge: 'Analytics'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption, compliance certifications, and advanced access controls.',
      badge: 'Security'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools that enable teams to work together on AI projects and share insights.',
      badge: 'Collaboration'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Deploy AI agents across multiple regions with automatic scaling and load balancing capabilities.',
      badge: 'Scalability'
    }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '10M+', label: 'API Calls Daily' },
    { number: '60%', label: 'Average Cost Reduction' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Our AI Multi-Agent Platform
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          We're revolutionizing how businesses interact with AI through intelligent multi-agent orchestration, 
          delivering unprecedented cost savings and performance optimization.
        </p>
        <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl shadow-xl p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            To democratize access to advanced AI capabilities while making them more efficient, 
            cost-effective, and easier to manage for businesses of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">Pushing the boundaries of what's possible with AI technology and multi-agent systems.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Efficiency</h3>
            <p className="text-gray-600">Maximizing performance while minimizing costs through intelligent optimization.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility</h3>
            <p className="text-gray-600">Making advanced AI capabilities accessible to businesses regardless of their size or technical expertise.</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="backdrop-blur-xl bg-white/80 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & Machine Learning</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Advanced Large Language Models (LLMs)</li>
              <li>• Multi-agent reinforcement learning</li>
              <li>• Neural network optimization</li>
              <li>• Real-time decision making algorithms</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Infrastructure</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Kubernetes-based orchestration</li>
              <li>• Auto-scaling compute resources</li>
              <li>• Global edge deployment</li>
              <li>• Advanced monitoring & analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
