
import { Shield, TrendingDown, Zap, Target } from "lucide-react";

export const ValueProposition = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Reduce AI Infrastructure Costs",
      description: "Automatically optimize your AI workloads to achieve up to 60% cost reduction through intelligent resource allocation and model selection."
    },
    {
      icon: Zap,
      title: "Real-time Performance Optimization",
      description: "Monitor and optimize AI performance in real-time with our multi-agent orchestration system that adapts to changing workload demands."
    },
    {
      icon: Target,
      title: "Intelligent Resource Allocation",
      description: "Leverage advanced algorithms to automatically allocate computing resources based on workload requirements and cost optimization goals."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security & Compliance",
      description: "Maintain security and compliance standards while optimizing costs with built-in risk assessment and regulatory compliance monitoring."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your AI Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intelligent multi-agent system delivers measurable ROI through automated 
            AI cost management and sophisticated resource optimization.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:bg-emerald-50 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                    <benefit.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Measurable ROI Within 30 Days
          </h3>
          <p className="text-emerald-100 text-lg mb-6 max-w-2xl mx-auto">
            Join enterprise clients who have saved millions in AI infrastructure costs 
            while improving performance and maintaining compliance standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-1">$2.4M</div>
              <div className="text-emerald-100">Average Annual Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">85%</div>
              <div className="text-emerald-100">Performance Improvement</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">30 Days</div>
              <div className="text-emerald-100">Time to ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
