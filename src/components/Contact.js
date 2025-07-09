import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "nwokonkwoobinna@gmail.com",
      description: "For detailed project inquiries and consultations",
      gradient: "from-gold-400 to-amber-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (832) 814-XXXX",
      description: "Direct consultation and urgent inquiries",
      gradient: "from-slate-500 to-charcoal-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Remote & On-site Consulting",
      description: "Available for on-site and remote consultations worldwide",
      gradient: "from-accent-500 to-accent-600"
    }
  ];

  const consultationTypes = [
    "Initial project assessment",
    "Technical feasibility review",
    "R&D strategy development",
    "Computational chemistry consulting",
    "AI/ML implementation guidance",
    "Patent strategy consultation",
    "Team training and workshops",
    "Ongoing project support"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-charcoal-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-charcoal-100 to-slate-100 border border-charcoal-200 rounded-full text-charcoal-700 font-medium text-sm mb-6">
              <Send className="w-4 h-4 mr-2 text-gold-500" />
              Get Started
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
              Start Your R&D
              <span className="block bg-gradient-to-r from-charcoal-800 via-slate-800 to-charcoal-800 bg-clip-text text-transparent">
                Transformation
              </span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              Ready to accelerate your R&D with computational science and AI? 
              Let's discuss how our expertise can drive breakthrough results for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">
                  Contact Information
                </h3>
                <p className="text-charcoal-600 mb-8 leading-relaxed">
                  Reach out to discuss your scientific R&D challenges and explore how our 
                  expertise can help you achieve breakthrough results.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm border border-charcoal-200 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start">
                      <div className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center mr-4 shadow-medium flex-shrink-0`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-charcoal-900 mb-1 group-hover:text-charcoal-800 transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-charcoal-800 font-semibold mb-2">
                          {method.value}
                        </p>
                        <p className="text-charcoal-600 text-sm leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Consultation Types */}
              <div className="bg-gradient-to-r from-charcoal-800 to-slate-800 rounded-2xl p-8 text-white shadow-strong">
                <h4 className="text-xl font-bold mb-4">Consultation Types</h4>
                <div className="grid grid-cols-1 gap-3">
                  {consultationTypes.map((type, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-gold-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-charcoal-100 text-sm">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur-sm border border-charcoal-200 rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6">
                Project Inquiry Form
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-charcoal-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal-700 font-semibold mb-2">
                      Company *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Your company name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-charcoal-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal-700 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-charcoal-700 font-semibold mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm">
                    <option value="">Select a project type</option>
                    <option value="computational-chemistry">Computational Chemistry Simulations</option>
                    <option value="ai-molecular-design">AI-Driven Molecular Design</option>
                    <option value="materials-modeling">Materials Modeling & Informatics</option>
                    <option value="ml-workflows">ML Workflows for R&D</option>
                    <option value="technical-advisory">Technical Advisory & Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-charcoal-700 font-semibold mb-2">
                    Project Details *
                  </label>
                  <textarea 
                    rows="6"
                    className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Tell us about your R&D challenge, goals, timeline, and any specific requirements..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="group w-full bg-gradient-to-r from-charcoal-800 to-slate-800 hover:from-charcoal-900 hover:to-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-strong hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Project Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Response Time Info */}
          <div className="bg-gradient-to-r from-gold-50 to-amber-50 border border-gold-200 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-gold-600 mr-3" />
              <h3 className="text-2xl font-bold text-charcoal-900">
                Quick Response Guarantee
              </h3>
            </div>
            <p className="text-charcoal-700 text-lg max-w-2xl mx-auto">
              We understand the urgency of scientific projects. All inquiries receive 
              a response within 24 hours, with initial consultations scheduled within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 