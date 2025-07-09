import React from 'react';
import { 
  Search, 
  Palette, 
  Play, 
  CheckCircle, 
  Headphones,
  ArrowRight
} from 'lucide-react';

const Process = () => {
  const processSteps = [
    {
      icon: Search,
      title: 'Define',
      description: 'We start by understanding your objectives, constraints, and success metrics to create a clear project roadmap.',
      details: ['Requirements gathering', 'Stakeholder interviews', 'Goal setting', 'Timeline planning']
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Develop comprehensive strategies and experimental designs tailored to your specific needs and industry requirements.',
      details: ['Methodology selection', 'Resource planning', 'Risk mitigation', 'Quality assurance']
    },
    {
      icon: Play,
      title: 'Execute',
      description: 'Implement the designed approach with rigorous attention to detail, data integrity, and scientific standards.',
      details: ['Experimental execution', 'Data collection', 'Real-time monitoring', 'Documentation']
    },
    {
      icon: CheckCircle,
      title: 'Deliver',
      description: 'Present comprehensive results, insights, and recommendations in clear, actionable formats for your team.',
      details: ['Data analysis', 'Report generation', 'Presentation delivery', 'Recommendations']
    },
    {
      icon: Headphones,
      title: 'Support',
      description: 'Provide ongoing consultation, training, and support to ensure successful implementation and continued success.',
      details: ['Implementation support', 'Team training', 'Follow-up analysis', 'Continuous improvement']
    }
  ];

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            A systematic approach that ensures consistent quality, clear communication, 
            and measurable results for every project.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
                     {/* Connection Line */}
           <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-deepTeal-200 via-deepTeal-400 to-deepTeal-200 transform -translate-y-1/2 z-0"></div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 card-hover border border-charcoal-100 text-center relative z-10">
                                     {/* Step Number */}
                   <div className="w-12 h-12 bg-deepTeal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                     <span className="text-deepTeal-600 font-bold text-lg">{index + 1}</span>
                   </div>

                   {/* Icon */}
                   <div className="w-16 h-16 bg-deepTeal-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                     <step.icon className="w-8 h-8 text-deepTeal-600" />
                   </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-charcoal-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-charcoal-600 mb-4 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-1 text-left">
                    {step.details.map((detail, detailIndex) => (
                                           <li key={detailIndex} className="flex items-center text-xs text-charcoal-600">
                       <div className="w-1 h-1 bg-deepTeal-500 rounded-full mr-2 flex-shrink-0"></div>
                       {detail}
                     </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow (Desktop) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-20">
                                     <div className="w-4 h-4 bg-deepTeal-500 rounded-full flex items-center justify-center">
                   <ArrowRight size={12} className="text-white" />
                 </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Arrows */}
          <div className="lg:hidden flex justify-center items-center space-x-4 mt-8">
            {processSteps.slice(0, -1).map((_, index) => (
              <div key={index} className="flex items-center">
                <ArrowRight size={20} className="text-deepTeal-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
                         <div className="w-16 h-16 bg-deepTeal-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <CheckCircle className="w-8 h-8 text-deepTeal-600" />
             </div>
            <h3 className="text-xl font-semibold text-charcoal-900 mb-2">
              Consistent Quality
            </h3>
            <p className="text-charcoal-600">
              Every project follows the same rigorous process, ensuring reliable, 
              high-quality results you can depend on.
            </p>
          </div>

          <div className="text-center">
                         <div className="w-16 h-16 bg-deepTeal-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <Search className="w-8 h-8 text-deepTeal-600" />
             </div>
            <h3 className="text-xl font-semibold text-charcoal-900 mb-2">
              Transparent Communication
            </h3>
            <p className="text-charcoal-600">
              Regular updates and clear deliverables keep you informed at every stage 
              of the process.
            </p>
          </div>

          <div className="text-center">
                         <div className="w-16 h-16 bg-deepTeal-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <Play className="w-8 h-8 text-deepTeal-600" />
             </div>
            <h3 className="text-xl font-semibold text-charcoal-900 mb-2">
              Measurable Results
            </h3>
            <p className="text-charcoal-600">
              Clear metrics and KPIs ensure you can track progress and measure 
              the impact of our work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process; 