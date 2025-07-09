import React from 'react';
import { 
  Droplets, 
  Brain, 
  Factory, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Target, 
  ArrowRight,
  CheckCircle,
  Award
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Advanced Water Treatment Materials",
      subtitle: "Water Technology Initiative",
      description: "Developed novel adsorbent material to remove toxic contaminants at scale, achieving >50% performance improvement over existing materials.",
      metrics: [
        { icon: Target, value: ">50%", label: "Performance Improvement" },
        { icon: DollarSign, value: "$500K+", label: "Research Funding" },
        { icon: Clock, value: "7+", label: "Publications" }
      ],
      results: [
        "Pioneered breakthrough adsorbent technology",
        "Performance exceeding existing materials by >50%",
        "Generated 7+ scientific publications",
        "Attracted $500K+ in NIH/NSF funding",
        "Potential impact benefiting 150+ million people"
      ],
      gradient: "from-gold-400 to-amber-500",
      bgGradient: "from-gold-50 to-amber-50"
    },
    {
      title: "ML Accelerates Molecular Screening",
      subtitle: "Industrial Chemicals Client",
      description: "Developed custom ML workflow to predict molecular binding affinities and catalytic activity, saving 2.6 million computational hours.",
      metrics: [
        { icon: Clock, value: "2.6M", label: "CPU Hours Saved" },
        { icon: TrendingUp, value: "30%", label: "Performance Improvement" },
        { icon: Target, value: "Weeks", label: "Time to Results" }
      ],
      results: [
        "Saved 2.6 million computational hours",
        "Achieved 30% performance improvement",
        "Delivered results in weeks vs months",
        "Accelerated R&D timeline significantly",
        "Enabled competitive advantage in catalyst development"
      ],
      gradient: "from-slate-500 to-charcoal-600",
      bgGradient: "from-slate-50 to-charcoal-50"
    },
    {
      title: "AI-Guided Materials Design",
      subtitle: "Manufacturing Company",
      description: "Applied generative AI model for materials discovery, avoiding multiple years of iterative experimentation and saving $1M+ in research costs.",
      metrics: [
        { icon: DollarSign, value: "$1M+", label: "Cost Savings" },
        { icon: Clock, value: "Years", label: "Time Saved" },
        { icon: Target, value: "Breakthrough", label: "Formulation" }
      ],
      results: [
        "Avoided multiple years of experimentation",
        "Saved over $1 million in research costs",
        "Identified breakthrough polymer formulation",
        "Met durability criteria without physical trials",
        "Moved product to development in fraction of time"
      ],
      gradient: "from-accent-500 to-accent-600",
      bgGradient: "from-accent-50 to-accent-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-charcoal-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-charcoal-100 to-slate-100 border border-charcoal-200 rounded-full text-charcoal-700 font-medium text-sm mb-6">
            <Award className="w-4 h-4 mr-2 text-gold-500" />
            Proven Results
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
            Transformative Case Studies
            <span className="block bg-gradient-to-r from-charcoal-800 via-slate-800 to-charcoal-800 bg-clip-text text-transparent">
              Across Industries
            </span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Real-world examples of how our computational science and AI methodologies 
            have delivered breakthrough results across diverse industries.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="group bg-white/90 backdrop-blur-sm border border-charcoal-200 rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${study.gradient} rounded-xl flex items-center justify-center mb-4 shadow-medium`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-2 group-hover:text-charcoal-800 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gold-600 font-semibold text-sm">
                    {study.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-charcoal-600 mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="flex items-center justify-center w-8 h-8 bg-charcoal-100 rounded-lg mb-2 mx-auto">
                        <metric.icon className="w-4 h-4 text-charcoal-600" />
                      </div>
                      <div className="text-lg font-bold text-charcoal-900">{metric.value}</div>
                      <div className="text-xs text-charcoal-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-charcoal-800 mb-3">Key Outcomes:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-charcoal-700 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <button className="group/btn inline-flex items-center text-charcoal-700 font-semibold hover:text-charcoal-900 transition-colors">
                  View Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="bg-gradient-to-r from-charcoal-800 to-slate-800 rounded-3xl p-12 text-white shadow-strong">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Consistent Breakthrough Results
            </h3>
            <p className="text-charcoal-100 text-lg max-w-2xl mx-auto">
              Our methodology delivers measurable impact across all engagements, 
              transforming R&D productivity and accelerating innovation timelines.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-2">10×</div>
              <div className="text-charcoal-100 text-sm">Faster Development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-2">80-90%</div>
              <div className="text-charcoal-100 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-2">70%</div>
              <div className="text-charcoal-100 text-sm">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-2">100%</div>
              <div className="text-charcoal-100 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 