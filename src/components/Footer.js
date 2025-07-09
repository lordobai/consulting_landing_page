import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Star
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Computational Chemistry",
    "AI & Machine Learning",
    "Data Analytics",
    "Research Strategy",
    "Technical Documentation",
    "Team Training"
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dr.nwokonkwo@consulting.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco Bay Area"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-charcoal-900 via-slate-900 to-charcoal-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-amber-500 rounded-xl flex items-center justify-center mr-4 shadow-medium">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Dr. Obinna Nwokonkwo</h3>
                <p className="text-charcoal-300">Scientific R&D Consulting</p>
              </div>
            </div>
            <p className="text-charcoal-300 mb-6 leading-relaxed max-w-md">
              Transforming scientific vision into reality through expert consulting, 
              innovative methodologies, and proven results across diverse industries.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gradient-to-br from-charcoal-700 to-slate-700 rounded-lg flex items-center justify-center hover:from-charcoal-600 hover:to-slate-600 transition-all duration-300 transform hover:-translate-y-1">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-charcoal-700 to-slate-700 rounded-lg flex items-center justify-center hover:from-charcoal-600 hover:to-slate-600 transition-all duration-300 transform hover:-translate-y-1">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button className="text-charcoal-300 hover:text-gold-400 transition-colors duration-300 text-left">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button className="text-charcoal-300 hover:text-gold-400 transition-colors duration-300 text-left">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-charcoal-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-amber-500 rounded-lg flex items-center justify-center mr-4 shadow-medium">
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-charcoal-300 text-sm">{info.label}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-charcoal-800 to-slate-800 rounded-2xl p-8 mb-8">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Stay Updated</h4>
            <p className="text-charcoal-300 mb-6 max-w-md mx-auto">
              Subscribe to our newsletter for the latest insights in scientific R&D and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-charcoal-600 rounded-xl text-white placeholder-charcoal-400 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
              />
              <button className="group bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-500 hover:to-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-charcoal-400 text-sm mb-4 md:mb-0">
              © 2024 Dr. Obinna Nwokonkwo. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button className="text-charcoal-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </button>
              <button className="text-charcoal-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                Terms of Service
              </button>
              <button className="text-charcoal-400 hover:text-gold-400 transition-colors duration-300 text-sm">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 