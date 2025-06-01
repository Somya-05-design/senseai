
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'agent';
  content: string;
  agent?: string;
  timestamp: Date;
}

const agents = [
  'Orchestrator Agent',
  'Task Automation Agent',
  'Cost Forecasting Agent',
  'LLM Selection Agent',
  'ROI Analysis Agent'
];

const mockResponses = [
  {
    agent: 'Orchestrator Agent',
    responses: [
      "I'll coordinate the other agents to handle your request...",
      "Analyzing your query and delegating to appropriate agents...",
      "Orchestrating multi-agent response for optimal results..."
    ]
  },
  {
    agent: 'Cost Forecasting Agent',
    responses: [
      "Based on current data, the estimated cost is $2,450 for this operation...",
      "Cost analysis shows 15% reduction compared to last month...",
      "Forecasting indicates optimal cost efficiency at current usage levels..."
    ]
  },
  {
    agent: 'Task Automation Agent',
    responses: [
      "Automating this workflow will save approximately 40% of manual effort...",
      "I can set up automated triggers for this recurring task...",
      "Task optimization complete - reduced processing time by 60%..."
    ]
  },
  {
    agent: 'LLM Selection Agent',
    responses: [
      "Recommending GPT-4 for this complex reasoning task...",
      "Claude-3 would be optimal for this analytical request...",
      "For cost efficiency, I suggest using GPT-3.5-turbo for this query..."
    ]
  },
  {
    agent: 'ROI Analysis Agent',
    responses: [
      "Current ROI shows 340% improvement over traditional methods...",
      "Investment in AI automation shows positive returns within 3 months...",
      "Cost-benefit analysis indicates 85% efficiency gains..."
    ]
  }
];

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAgentResponse = () => {
    setIsTyping(true);
    
    // Simulate multiple agent responses
    const numResponses = Math.floor(Math.random() * 3) + 2; // 2-4 responses
    const selectedAgents = agents.sort(() => 0.5 - Math.random()).slice(0, numResponses);
    
    selectedAgents.forEach((agent, index) => {
      setTimeout(() => {
        const agentResponses = mockResponses.find(ar => ar.agent === agent)?.responses || [];
        const randomResponse = agentResponses[Math.floor(Math.random() * agentResponses.length)];
        
        const agentMessage: Message = {
          id: Date.now().toString() + index,
          type: 'agent',
          content: randomResponse,
          agent: agent,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, agentMessage]);
        
        if (index === selectedAgents.length - 1) {
          setIsTyping(false);
        }
      }, (index + 1) * 1500);
    });
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate agent responses
    setTimeout(simulateAgentResponse, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl shadow-xl p-6 h-[600px] flex flex-col">
      <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-200">
        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
          <Bot className="h-5 w-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">AI Agent Chat</h2>
          <p className="text-sm text-gray-500">Multi-agent responses powered by AI</p>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <Bot className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Start a conversation with your AI agents</p>
          </div>
        )}
        
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
              message.type === 'user'
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}>
              {message.type === 'agent' && message.agent && (
                <div className="text-xs font-medium text-green-600 mb-1">
                  [{message.agent}]
                </div>
              )}
              <div className="text-sm">{message.content}</div>
              <div className={`text-xs mt-1 opacity-70 ${
                message.type === 'user' ? 'text-green-100' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg max-w-xs">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex space-x-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask your AI agents anything..."
          className="flex-1 border-gray-200 focus:border-green-500 focus:ring-green-500"
          disabled={isTyping}
        />
        <Button
          onClick={handleSendMessage}
          disabled={!inputValue.trim() || isTyping}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
