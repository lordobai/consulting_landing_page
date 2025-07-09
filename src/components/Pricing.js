import React from 'react';
import { 
  CheckCircle, 
  Star, 
  ArrowRight,
  Clock,
  Users,
  Zap,
  DollarSign,
  Target
} from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Exploratory Analysis",
      price: "$50K - $100K",
      duration: "8-10 weeks",
      description: "Focused consultation on a specific problem or feasibility study. Ideal for proof-of-concept or testing advanced methods on a smaller scale.",
      features: [
        "Detailed analysis on one defined R&D challenge",
        "Computational evaluation of candidate compounds",
        "Pilot ML model development",
        "Summary report with insights and recommendations",
        "Follow-up consultation",
        "Basic feasibility assessment"
      ],
      gradient: "from-charcoal-600 to-slate-700",
      bgGradient: "from-charcoal-50 to-slate-50",
      popular: false
    },
    {
      name: "Comprehensive Project",
      price: "$100K - $300K",
      duration: "6 months",
      description: "Full-scale consulting project addressing broader R&D objectives. Best value for tackling significant challenges with high-impact outcomes.",
      features: [
        "End-to-end services from project design to delivery",
        "Advanced computational chemistry simulations",
        "AI-driven molecular design and screening",
        "Materials modeling and informatics",
        "Complete technical report and models/software",
        "On-site presentation to stakeholders",
        "Limited post-project support",
        "Knowledge transfer and training"
      ],
      gradient: "from-gold-400 to-amber-500",
      bgGradient: "from-gold-50 to-amber-50",
      popular: true
    },
    {
      name: "Strategic Partnership",
      price: "$300K+",
      duration: "12 months",
      description: "Ongoing consulting support as a strategic innovation partner. Continuous input and multiple project deliverables over the period.",
      features: [
        "Retainer arrangement with on-demand services",
        "Multiple project deliverables",
        "Quarterly strategy workshops",
        "Priority response for urgent analyses",
        "Regular innovation sessions",
        "Deep integration with R&D team",
        "Continuous methodology improvement",
        "Long-term partnership benefits"
      ],
      gradient: "from-accent-500 to-accent-600",
      bgGradient: "from-accent-50 to-accent-100",
      popular: false
    }
  ];

  const valueProps = [
    {
      icon: Clock,
      title: "Accelerated Innovation",
      description: "Achieve breakthrough results in months instead of years"
    },
    {
      icon: Target,
      title: "Higher Success Rates",
      description: "80-90% success rates vs 50% traditional approaches"
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Up to 70% cost reduction through virtual screening"
    },
    {
      icon: Users,
      title: "Knowledge Transfer",
      description: "Build internal capabilities for sustained innovation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-charcoal-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-charcoal-100 to-slate-100 border border-charcoal-200 rounded-full text-charcoal-700 font-medium text-sm mb-6">
            <Star className="w-4 h-4 mr-2 text-gold-500" />
            Investment Options
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
            Flexible Engagement Tiers
            <span className="block bg-gradient-to-r from-charcoal-800 via-slate-800 to-charcoal-800 bg-clip-text text-transparent">
              for Every Need
            </span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing aligned with industry norms for specialized scientific consulting. 
            All pricing is project-based or retainer, reflecting the value delivered.
          </p>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {valueProps.map((prop, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-charcoal-200 rounded-2xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-medium">
                <prop.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-charcoal-900 mb-2">{prop.title}</h4>
              <p className="text-charcoal-600 text-sm leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`group relative bg-white/90 backdrop-blur-sm border-2 rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-gold-300 shadow-medium' 
                  : 'border-charcoal-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-gold-400 to-amber-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-2 group-hover:text-charcoal-800 transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-charcoal-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-charcoal-900 mb-1">
                      {plan.price}
                    </div>
                    <div className="text-charcoal-500 text-sm">
                      {plan.duration} engagement
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-charcoal-800 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-charcoal-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className={`w-full group/btn bg-gradient-to-r ${plan.gradient} hover:shadow-lg text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center`}>
                  {plan.name === 'Strategic Partnership' ? 'Contact for Quote' : 'Get Started'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-charcoal-800 to-slate-800 rounded-3xl p-12 text-white shadow-strong">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Exceptional ROI Guaranteed
            </h3>
            <p className="text-charcoal-100 text-lg max-w-2xl mx-auto">
              Our consulting service pays for itself through accelerated R&D timelines, improved success probabilities, 
              and innovations that might otherwise not be reachable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Accelerated Innovation</h4>
              <p className="text-charcoal-100 text-sm">
                Achieve breakthrough results in months instead of years
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-charcoal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Higher Success Rates</h4>
              <p className="text-charcoal-100 text-sm">
                80-90% success rates vs 50% traditional approaches
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Knowledge Transfer</h4>
              <p className="text-charcoal-100 text-sm">
                Build internal capabilities for sustained innovation
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <button className="group bg-white text-charcoal-800 px-8 py-4 rounded-xl font-semibold text-lg shadow-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 