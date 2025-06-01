
import { Bot, Settings, BarChart, Target, DollarSign, TrendingUp, Shield, Wrench, Zap, Users, Activity, Brain, ArrowRight, Router } from "lucide-react";

export const AIAgentsSection = () => {
  const agents = [
    {
      icon: Settings,
      name: "Orchestrator Agent",
      purpose: "Central coordination of all AI agents and task distribution across the platform"
    },
    {
      icon: Zap,
      name: "AI Task Automation Agent", 
      purpose: "Automates repetitive AI tasks and workflows for maximum efficiency"
    },
    {
      icon: BarChart,
      name: "AI Function Analysis Agent",
      purpose: "Analyzes AI function performance and identifies optimization opportunities"
    },
    {
      icon: Bot,
      name: "LLM Selection Agent",
      purpose: "Intelligently selects the most cost-effective LLM for each specific task"
    },
    {
      icon: DollarSign,
      name: "Cost Optimization Agent",
      purpose: "Continuously monitors and optimizes AI infrastructure costs in real-time"
    },
    {
      icon: Target,
      name: "Inference Cost Estimator Agent",
      purpose: "Provides accurate cost estimates for AI inference operations before execution"
    },
    {
      icon: TrendingUp,
      name: "ROI Analysis Agent",
      purpose: "Calculates and tracks return on investment for AI optimization initiatives"
    },
    {
      icon: BarChart,
      name: "Cost Forecasting Agent",
      purpose: "Predicts future AI costs based on usage patterns and optimization trends"
    },
    {
      icon: Shield,
      name: "Compliance & Risk Agent",
      purpose: "Ensures AI operations meet regulatory requirements and risk management standards"
    },
    {
      icon: Wrench,
      name: "Custom Model Builder Agent",
      purpose: "Creates and optimizes custom AI models tailored to specific business requirements"
    },
    {
      icon: Brain,
      name: "Prompt Optimizer Agent", 
      purpose: "Optimizes AI prompts for better performance and reduced token consumption"
    },
    {
      icon: Users,
      name: "User Behavior Analytics Agent",
      purpose: "Analyzes user interaction patterns to optimize AI resource allocation"
    },
    {
      icon: Activity,
      name: "Performance Monitoring Agent",
      purpose: "Continuously monitors AI system performance and identifies bottlenecks"
    },
    {
      icon: Brain,
      name: "Insight Aggregator Agent",
      purpose: "Aggregates data from all agents to provide comprehensive optimization insights"
    },
    {
      icon: ArrowRight,
      name: "Integration Agent",
      purpose: "Manages seamless integration with existing enterprise systems and workflows"
    },
    {
      icon: Router,
      name: "LLM Router Agent",
      purpose: "Intelligently routes requests to the most appropriate LLM based on cost and performance"
    }
  ];

  return (
    <section id="agents" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Intelligent Multi-Agent Orchestration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our specialized AI agents work together to optimize every aspect of your AI infrastructure, 
            delivering unprecedented cost savings and performance improvements.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:bg-emerald-50 transition-all duration-300 group border border-gray-100 hover:border-emerald-200 hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors duration-300 shadow-sm">
                  <agent.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {agent.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {agent.purpose}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Agent Orchestration Info */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Seamless Agent Orchestration
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Our agents communicate and collaborate in real-time, creating a unified intelligence 
              that adapts to your specific AI optimization needs and business requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="text-2xl font-bold text-emerald-400 mb-2">Real-time</div>
                <div className="text-gray-300">Agent Communication</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="text-2xl font-bold text-emerald-400 mb-2">Adaptive</div>
                <div className="text-gray-300">Learning & Optimization</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="text-2xl font-bold text-emerald-400 mb-2">Scalable</div>
                <div className="text-gray-300">Enterprise Architecture</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started with AI Agents
            <ArrowRight className="ml-2 h-5 w-5 inline" />
          </button>
        </div>
      </div>
    </section>
  );
};
