import React from 'react';
import { ArrowRight, Star, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-charcoal-50 via-white to-slate-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-gold-200 to-amber-200 rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-slate-200 to-charcoal-200 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-charcoal-100 to-slate-100 rounded-full opacity-5 blur-3xl"></div>
      </div>

      {/* Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L1200 0L1200 800L0 800Z" fill="url(#gradient1)" opacity="0.03"/>
            <path d="M0 400L400 0L800 400L400 800Z" fill="url(#gradient2)" opacity="0.02"/>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316"/>
                <stop offset="100%" stopColor="#eab308"/>
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#475569"/>
                <stop offset="100%" stopColor="#334155"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-charcoal-100 to-slate-100 border border-charcoal-200 rounded-full text-charcoal-700 font-medium text-sm">
              <Star className="w-4 h-4 mr-2 text-gold-500" />
              Advanced Scientific R&D Consulting
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-charcoal-900 mb-6 leading-tight">
              Accelerate Innovation
              <span className="block bg-gradient-to-r from-charcoal-800 via-slate-800 to-charcoal-800 bg-clip-text text-transparent">
                with Computational Science & AI
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-charcoal-600 max-w-4xl mx-auto leading-relaxed">
              Dr. Obinna "Obi" Nwokonkwo delivers cutting-edge scientific consulting with 
              <span className="font-semibold text-charcoal-800"> 10+ years of expertise</span> in computational chemistry, 
              helping organizations achieve breakthrough innovations and measurable ROI.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-charcoal-200 rounded-2xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-charcoal-900 mb-2">10×</div>
              <div className="text-charcoal-600 font-medium">Faster Development</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-charcoal-200 rounded-2xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-charcoal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-charcoal-900 mb-2">$500K+</div>
              <div className="text-charcoal-600 font-medium">Research Funding</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-charcoal-200 rounded-2xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-charcoal-900 mb-2">80-90%</div>
              <div className="text-charcoal-600 font-medium">Success Rate</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-charcoal-800 to-slate-800 hover:from-charcoal-900 hover:to-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-strong hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center">
              Start Your R&D Transformation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white/90 backdrop-blur-sm border-2 border-charcoal-200 hover:border-charcoal-300 text-charcoal-800 px-8 py-4 rounded-xl font-semibold text-lg shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
              View Case Studies
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-charcoal-500 text-sm mb-4">Trusted by leading organizations worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-charcoal-400 font-semibold">Fortune 500</div>
              <div className="w-1 h-1 bg-charcoal-300 rounded-full"></div>
              <div className="text-charcoal-400 font-semibold">Research Institutions</div>
              <div className="w-1 h-1 bg-charcoal-300 rounded-full"></div>
              <div className="text-charcoal-400 font-semibold">Startups</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 