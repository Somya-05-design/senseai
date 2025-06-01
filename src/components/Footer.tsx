
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              AI Cost <span className="text-emerald-400">Optimizer</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform your AI operations with intelligent multi-agent orchestration. 
              Reduce costs, improve performance, and scale efficiently with our enterprise-grade platform.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-emerald-400" />
                <span>contact@aicostoptimizer.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-emerald-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-emerald-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#agents" className="text-gray-300 hover:text-emerald-400 transition-colors">AI Agents</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Analytics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Integration</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 AI Cost Optimizer. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
