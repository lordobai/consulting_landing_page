import React from 'react';
import { 
  Award, 
  Users, 
  Clock, 
  Shield,
  CheckCircle
} from 'lucide-react';

const WhyChooseUs = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Expert Credentials',
      description: 'Dr. Nwokonkwo brings 15+ years of scientific expertise with advanced degrees and extensive industry experience.',
      features: [
        'PhD in Chemistry from top-tier university',
        'Published in peer-reviewed journals',
        'Patent holder in multiple technologies',
        'Industry certifications and training'
      ]
    },
    {
      icon: Users,
      title: 'Personalized Approach',
      description: 'Every project is tailored to your specific needs, with direct collaboration and dedicated attention throughout.',
      features: [
        'One-on-one consultation',
        'Customized solutions',
        'Direct communication',
        'Flexible engagement models'
      ]
    },
    {
      icon: Clock,
      title: 'Proven Efficiency',
      description: 'Our systematic approach and deep expertise enable faster project completion without compromising quality.',
      features: [
        'Streamlined methodologies',
        'Advanced tools and techniques',
        'Risk mitigation strategies',
        'Quality assurance protocols'
      ]
    },
    {
      icon: Shield,
      title: 'Trusted Partnership',
      description: 'Long-term relationships built on transparency, reliability, and consistent delivery of exceptional results.',
      features: [
        'Confidentiality agreements',
        'Regular progress updates',
        'Post-project support',
        'Ongoing consultation'
      ]
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Successful Projects' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '12+', label: 'Industries Served' }
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
            Why Choose Dr. Nwokonkwo?
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Four fundamental pillars that set our scientific consulting apart 
            and ensure your project's success.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-navy-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 card-hover border border-navy-100"
            >
              {/* Icon */}
                             <div className="w-16 h-16 bg-deepTeal-100 rounded-xl flex items-center justify-center mb-6">
                 <pillar.icon className="w-8 h-8 text-deepTeal-600" />
               </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-charcoal-900 mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                {pillar.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {pillar.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-deepTeal-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-navy-200 text-lg max-w-2xl mx-auto">
              Our track record speaks for itself. Here's what we've achieved 
              through dedicated scientific excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                                 <div className="text-3xl md:text-4xl font-bold text-gold-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-navy-200 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
                         <div className="w-16 h-16 bg-deepTeal-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <Award className="w-8 h-8 text-deepTeal-600" />
             </div>
            <h3 className="text-xl font-semibold text-charcoal-900 mb-2">
              Industry Recognition
            </h3>
            <p className="text-charcoal-600">
              Award-winning scientific consultant with recognition from 
              leading industry organizations and publications.
            </p>
          </div>

          <div className="text-center">
                         <div className="w-16 h-16 bg-deepTeal-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <Users className="w-8 h-8 text-deepTeal-600" />
             </div>
            <h3 className="text-xl font-semibold text-charcoal-900 mb-2">
              Client Success
            </h3>
            <p className="text-charcoal-600">
              Long-term partnerships with clients who consistently achieve 
              breakthrough results and competitive advantages.
            </p>
          </div>

          <div className="text-center">
                         <div className="w-16 h-16 bg-deepTeal-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <Shield className="w-8 h-8 text-deepTeal-600" />
             </div>
            <h3 className="text-xl font-semibold text-charcoal-900 mb-2">
              Quality Assurance
            </h3>
            <p className="text-charcoal-600">
              Rigorous quality standards and continuous improvement processes 
              ensure consistent, reliable results every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 