
import { Brain, Database, BarChart, Cog } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Model Optimization",
      description: "Intelligent selection and optimization of AI models based on performance requirements and cost constraints.",
      features: ["Model Performance Analysis", "Cost-Benefit Optimization", "Automatic Model Switching", "Custom Model Building"]
    },
    {
      icon: Database,
      title: "Infrastructure Management",
      description: "Comprehensive management of AI infrastructure with real-time monitoring and automatic scaling.",
      features: ["Resource Allocation", "Auto-scaling", "Performance Monitoring", "Cost Forecasting"]
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Deep analytics and actionable insights to continuously improve AI operations and reduce costs.",
      features: ["ROI Analysis", "Usage Analytics", "Cost Breakdown", "Performance Metrics"]
    },
    {
      icon: Cog,
      title: "Automated Orchestration",
      description: "Multi-agent orchestration system that automatically manages and optimizes your entire AI workflow.",
      features: ["Task Automation", "Intelligent Routing", "Workflow Optimization", "Real-time Adaptation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive AI Cost Optimization Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides end-to-end AI cost optimization through intelligent 
            automation, real-time monitoring, and advanced analytics.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <service.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Optimize Your AI Infrastructure?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading enterprises who trust our platform to reduce AI costs while maintaining peak performance.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
};
