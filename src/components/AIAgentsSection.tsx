
import { ArrowRight } from "lucide-react";
import { CircularGallery } from "./CircularGallery";

export const AIAgentsSection = () => {
  const agents = [
    {
      image: "/agents/orchestrator.png",
      text: "Orchestrator Agent"
    },
    {
      image: "/agents/automation.png", 
      text: "AI Task Automation Agent"
    },
    {
      image: "/agents/analysis.png",
      text: "AI Function Analysis Agent"
    },
    {
      image: "/agents/llm-selection.png",
      text: "LLM Selection Agent"
    },
    {
      image: "/agents/cost-optimization.png",
      text: "Cost Optimization Agent"
    },
    {
      image: "/agents/inference-estimator.png",
      text: "Inference Cost Estimator Agent"
    },
    {
      image: "/agents/roi-analysis.png",
      text: "ROI Analysis Agent"
    },
    {
      image: "/agents/cost-forecasting.png",
      text: "Cost Forecasting Agent"
    },
    {
      image: "/agents/compliance-risk.png",
      text: "Compliance & Risk Agent"
    },
    {
      image: "/agents/model-builder.png",
      text: "Custom Model Builder Agent"
    },
    {
      image: "/agents/prompt-optimizer.png", 
      text: "Prompt Optimizer Agent"
    },
    {
      image: "/agents/user-analytics.png",
      text: "User Behavior Analytics Agent"
    },
    {
      image: "/agents/performance-monitoring.png",
      text: "Performance Monitoring Agent"
    },
    {
      image: "/agents/insight-aggregator.png",
      text: "Insight Aggregator Agent"
    },
    {
      image: "/agents/integration.png",
      text: "Integration Agent"
    },
    {
      image: "/agents/llm-router.png",
      text: "LLM Router Agent"
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

        {/* Agents Carousel */}
        <div className="mb-16">
          <CircularGallery 
            items={agents}
            bend={3}
            textColor="#1e293b"
            borderRadius={0.05}
          />
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
