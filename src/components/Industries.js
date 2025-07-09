import React from 'react';
import { 
  FlaskConical, 
  Microscope, 
  Pill, 
  Leaf, 
  Zap, 
  Factory,
  Car,
  Building2,
  Globe,
  Shield,
  Cpu,
  Database
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      name: 'Pharmaceuticals',
      icon: Pill,
      description: 'Drug development & clinical trials',
      color: 'bg-red-100 text-red-700'
    },
    {
      name: 'Biotechnology',
      icon: Microscope,
      description: 'Genetic engineering & bioprocessing',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      name: 'Chemistry',
      icon: FlaskConical,
      description: 'Chemical synthesis & analysis',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      name: 'Agriculture',
      icon: Leaf,
      description: 'Crop science & sustainable farming',
      color: 'bg-green-100 text-green-700'
    },
    {
      name: 'Energy',
      icon: Zap,
      description: 'Renewable energy & storage',
      color: 'bg-yellow-100 text-yellow-700'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Process optimization & quality control',
      color: 'bg-gray-100 text-gray-700'
    },
    {
      name: 'Automotive',
      icon: Car,
      description: 'Materials science & safety testing',
      color: 'bg-indigo-100 text-indigo-700'
    },
    {
      name: 'Construction',
      icon: Building2,
      description: 'Materials & structural engineering',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      name: 'Environmental',
      icon: Globe,
      description: 'Sustainability & remediation',
      color: 'bg-teal-100 text-teal-700'
    },
    {
      name: 'Defense',
      icon: Shield,
      description: 'Advanced materials & systems',
      color: 'bg-slate-100 text-slate-700'
    },
    {
      name: 'Technology',
      icon: Cpu,
      description: 'Semiconductors & electronics',
      color: 'bg-cyan-100 text-cyan-700'
    },
    {
      name: 'Data Science',
      icon: Database,
      description: 'Analytics & machine learning',
      color: 'bg-pink-100 text-pink-700'
    }
  ];

  return (
    <section id="industries" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            From pharmaceuticals to renewable energy, we bring scientific expertise 
            to diverse industries, helping organizations innovate and grow.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group p-6 rounded-xl border border-charcoal-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 card-hover"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-lg ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon size={24} />
                </div>
                <h3 className="font-semibold text-charcoal-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-charcoal-600 mb-6">
            Don't see your industry? We adapt our expertise to your unique challenges.
          </p>
          <button className="btn-secondary">
            Discuss Your Industry Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries; 