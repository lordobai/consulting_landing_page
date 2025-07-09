import React from 'react';
import { 
  Atom, 
  Brain, 
  Database, 
  BarChart3, 
  FileText, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Atom,
      title: "Computational Chemistry Simulations",
      description: "Quantum chemistry, molecular dynamics, and thermodynamic modeling to virtually simulate chemical processes and materials. Explore vast chemical space 10× faster than lab experiments.",
      features: [
        "DFT Calculations",
        "Molecular Dynamics",
        "Reaction Mechanisms", 
        "HPC Simulations"
      ],
      gradient: "from-gold-400 to-amber-500",
      bgGradient: "from-gold-50 to-amber-50"
    },
    {
      icon: Brain,
      title: "AI-Driven Molecular Design",
      description: "Harness generative AI and machine learning to design novel molecules with desired properties. Screen millions of compounds in days instead of decades.",
      features: [
        "Generative Models",
        "Predictive Analytics",
        "Deep Neural Networks",
        "Evolutionary Algorithms"
      ],
      gradient: "from-slate-500 to-charcoal-600",
      bgGradient: "from-slate-50 to-charcoal-50"
    },
    {
      icon: Database,
      title: "Materials Modeling & Informatics",
      description: "Atomic-scale materials models to predict properties of novel materials. Coupled with data-driven analysis to optimize compositions for targeted performance.",
      features: [
        "Density Functional Theory",
        "Multi-scale Modeling",
        "Materials Informatics",
        "Property Prediction"
      ],
      gradient: "from-accent-500 to-accent-600",
      bgGradient: "from-accent-50 to-accent-100"
    },
    {
      icon: BarChart3,
      title: "ML Workflows for R&D",
      description: "End-to-end machine learning workflows to transform R&D data into actionable knowledge. Combine physics-based models with ML for hybrid modeling.",
      features: [
        "Data Pipeline Design",
        "Feature Engineering",
        "Predictive Modeling",
        "Hybrid AI/Physics"
      ],
      gradient: "from-charcoal-600 to-slate-700",
      bgGradient: "from-charcoal-50 to-slate-50"
    },
    {
      icon: FileText,
      title: "Technical Advisory",
      description: "Expert guidance on R&D strategy, second-opinion reviews, and troubleshooting complex scientific problems. Training workshops for computational tools.",
      features: [
        "Strategy Consulting",
        "Research Reviews",
        "Problem Solving",
        "Team Training"
      ],
      gradient: "from-gold-500 to-amber-600",
      bgGradient: "from-gold-50 to-amber-100"
    },
    {
      icon: Users,
      title: "Knowledge Transfer",
      description: "Comprehensive training and knowledge transfer to build internal capabilities and sustainable research practices within your organization.",
      features: [
        "Technical Workshops",
        "Best Practices Training",
        "Tool Implementation",
        "Knowledge Transfer"
      ],
      gradient: "from-slate-600 to-charcoal-700",
      bgGradient: "from-slate-50 to-charcoal-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-charcoal-50 to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-charcoal-100 to-slate-100 border border-charcoal-200 rounded-full text-charcoal-700 font-medium text-sm mb-6">
            <CheckCircle className="w-4 h-4 mr-2 text-gold-500" />
            Core Service Offerings
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
            Advanced Scientific
            <span className="block bg-gradient-to-r from-charcoal-800 via-slate-800 to-charcoal-800 bg-clip-text text-transparent">
              Consulting Services
            </span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            State-of-the-art methodologies that blend theoretical insight with practical application, 
            ensuring solutions are both cutting-edge and feasible for real-world R&D challenges.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm border border-charcoal-200 rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-medium`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-charcoal-900 mb-4 group-hover:text-charcoal-800 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-charcoal-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-charcoal-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button className="group/btn inline-flex items-center text-charcoal-700 font-semibold hover:text-charcoal-900 transition-colors">
                  Explore Methodology
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-charcoal-800 to-slate-800 rounded-3xl p-12 text-white shadow-strong">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your R&D?
            </h3>
            <p className="text-charcoal-100 text-lg mb-8 max-w-2xl mx-auto">
              Join industry leaders who have achieved breakthrough results with our computational science 
              and AI methodologies, reducing development time by 60-80% and improving success rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-charcoal-800 px-8 py-4 rounded-xl font-semibold text-lg shadow-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 