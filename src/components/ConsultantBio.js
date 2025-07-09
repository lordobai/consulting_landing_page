import React from 'react';
import { 
  Award, 
  GraduationCap, 
  Briefcase, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Brain,
  Zap
} from 'lucide-react';

const ConsultantBio = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Ph.D. Chemical Engineering",
      institution: "Arizona State University, 2025",
      description: "Specialized in computational chemistry, molecular dynamics, and machine learning for materials design"
    },
    {
      icon: Award,
      title: "10+ Years Experience",
      institution: "Computational Chemistry & AI",
      description: "Expert in DFT, MD simulations, AI/ML frameworks and high-performance computing"
    },
    {
      icon: Briefcase,
      title: "7+ Publications",
      institution: "Peer-reviewed Journals",
      description: "Published in top-tier scientific journals with focus on advanced materials and computational methods"
    },
    {
      icon: Users,
      title: "150M+ Impact",
      institution: "People Benefited",
      description: "Pioneered water treatment materials with potential global impact on clean water access"
    }
  ];

  const expertise = [
    "Computational Chemistry & Molecular Dynamics",
    "AI/ML for Materials Discovery",
    "Quantum Chemistry (DFT)",
    "High-Performance Computing",
    "Materials Modeling & Informatics",
    "Machine Learning Workflows",
    "Technology Transfer",
    "R&D Strategy & Innovation"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-charcoal-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-charcoal-100 to-slate-100 border border-charcoal-200 rounded-full text-charcoal-700 font-medium text-sm mb-6">
              <Star className="w-4 h-4 mr-2 text-gold-500" />
              Meet the Expert
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
              Dr. Obinna "Obi" Nwokonkwo
              <span className="block bg-gradient-to-r from-charcoal-800 via-slate-800 to-charcoal-800 bg-clip-text text-transparent">
                Computational Chemist & Materials Scientist
              </span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              An accomplished computational chemist and materials scientist with a decade of experience 
              in molecular modeling, quantum chemistry, and AI-driven materials discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Card */}
            <div className="bg-white/90 backdrop-blur-sm border border-charcoal-200 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-500">
              {/* Profile Header */}
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-gold-400 to-amber-500 rounded-full mx-auto mb-6 shadow-medium flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
                  Dr. Obinna "Obi" Nwokonkwo
                </h3>
                <p className="text-gold-600 font-semibold mb-4">
                  Principal Scientific Consultant
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center text-charcoal-600">
                    <Star className="w-4 h-4 text-gold-500 mr-1" />
                    <span className="text-sm font-medium">10+ Years</span>
                  </div>
                  <div className="flex items-center text-charcoal-600">
                    <Award className="w-4 h-4 text-gold-500 mr-1" />
                    <span className="text-sm font-medium">7+ Publications</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-8">
                <h4 className="font-semibold text-charcoal-800 mb-3">Professional Background</h4>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Dr. Nwokonkwo is a leading expert in computational chemistry and AI-driven scientific research. 
                  With a Ph.D. from Arizona State University and extensive experience in both academia and industry, 
                  he has successfully pioneered advanced materials for water treatment and environmental remediation.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  His work has resulted in breakthrough technologies with potential to benefit over 150 million people 
                  globally, demonstrating both scientific rigor and real-world impact.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="space-y-3">
                <h4 className="font-semibold text-charcoal-800 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-700 text-sm">Pioneered advanced materials for water treatment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-700 text-sm">Published 7+ peer-reviewed scientific papers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-700 text-sm">Secured $500K+ in NIH/NSF research funding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-700 text-sm">Developed ML workflows saving 2.6M CPU hours</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Credentials Grid */}
            <div className="space-y-6">
              {credentials.map((credential, index) => (
                <div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm border border-charcoal-200 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-charcoal-600 rounded-xl flex items-center justify-center mr-4 shadow-medium flex-shrink-0">
                      <credential.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-charcoal-900 mb-1 group-hover:text-charcoal-800 transition-colors">
                        {credential.title}
                      </h4>
                      <p className="text-gold-600 font-semibold text-sm mb-2">
                        {credential.institution}
                      </p>
                      <p className="text-charcoal-600 text-sm leading-relaxed">
                        {credential.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="bg-gradient-to-r from-charcoal-800 to-slate-800 rounded-3xl p-12 text-white shadow-strong">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                Areas of Expertise
              </h3>
              <p className="text-charcoal-100 text-lg max-w-2xl mx-auto">
                Comprehensive scientific consulting services backed by deep technical expertise 
                and proven track record of delivering breakthrough results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((area, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-100 text-sm leading-relaxed">{area}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <button className="group bg-white text-charcoal-800 px-8 py-4 rounded-xl font-semibold text-lg shadow-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultantBio; 