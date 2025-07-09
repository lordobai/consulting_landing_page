import React, { useState } from 'react';
import { 
  Download, 
  Eye, 
  FileText, 
  Play,
  ExternalLink,
  CheckCircle
} from 'lucide-react';

const PitchDeck = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const pitchDeckSections = [
    {
      id: 'overview',
      title: 'Overview',
      description: 'Executive summary and key highlights of our scientific consulting approach.',
      duration: '5 min read'
    },
    {
      id: 'methodology',
      title: 'Methodology',
      description: 'Detailed breakdown of our proven scientific consulting process and methodologies.',
      duration: '8 min read'
    },
    {
      id: 'case-studies',
      title: 'Case Studies',
      description: 'Real-world examples showcasing successful project outcomes and client results.',
      duration: '12 min read'
    },
    {
      id: 'services',
      title: 'Services',
      description: 'Comprehensive overview of our scientific consulting services and capabilities.',
      duration: '6 min read'
    }
  ];

  const keyHighlights = [
    '15+ years of scientific expertise',
    '50+ successful projects delivered',
    '95% client satisfaction rate',
    '12+ industries served',
    'Proven methodology framework',
    'Flexible engagement models'
  ];

  return (
    <section id="pitch-deck" className="section-padding bg-navy-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
            Pitch Deck & Resources
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Explore our comprehensive presentation materials and resources 
            to understand how we can transform your scientific initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pitch Deck Preview */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-charcoal-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-charcoal-900">
                Scientific Consulting Pitch Deck
              </h3>
              <div className="flex items-center space-x-2">
                                 <span className="text-sm text-deepTeal-600 font-medium">PDF</span>
                <span className="text-sm text-charcoal-500">• 2.4 MB</span>
              </div>
            </div>

            {/* Preview Image */}
                         <div className="bg-gradient-to-br from-navy-100 to-deepTeal-100 rounded-xl p-8 mb-6 text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-navy-600" />
              </div>
              <h4 className="text-lg font-semibold text-charcoal-900 mb-2">
                Dr. Obinna Nwokonkwo
              </h4>
              <p className="text-charcoal-600 text-sm">
                Scientific Consulting Services
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Pitch Deck
              </button>
              <button className="btn-secondary flex items-center justify-center group">
                <Eye className="w-5 h-5 mr-2" />
                Preview Online
              </button>
            </div>

            {/* Key Highlights */}
            <div className="mt-8">
              <h4 className="font-semibold text-charcoal-900 mb-4">Key Highlights:</h4>
              <div className="grid grid-cols-2 gap-3">
                {keyHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center text-sm text-charcoal-700">
                    <CheckCircle className="w-4 h-4 text-deepTeal-600 mr-2 flex-shrink-0" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Navigation */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal-100">
              <h3 className="text-xl font-semibold text-charcoal-900 mb-4">
                What's Inside
              </h3>
              
              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-6 bg-charcoal-100 rounded-lg p-1">
                {pitchDeckSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveTab(section.id)}
                    className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === section.id
                        ? 'bg-white text-charcoal-900 shadow-sm'
                        : 'text-charcoal-600 hover:text-charcoal-900'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>

              {/* Active Tab Content */}
              <div className="space-y-4">
                {pitchDeckSections
                  .filter(section => section.id === activeTab)
                  .map(section => (
                    <div key={section.id}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-charcoal-900">
                          {section.title}
                        </h4>
                        <span className="text-sm text-charcoal-500">
                          {section.duration}
                        </span>
                      </div>
                      <p className="text-charcoal-600 text-sm leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Additional Resources */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal-100">
              <h3 className="text-xl font-semibold text-charcoal-900 mb-4">
                Additional Resources
              </h3>
              
              <div className="space-y-4">
                                 <div className="flex items-center justify-between p-4 bg-navy-50 rounded-lg">
                   <div className="flex items-center">
                     <div className="w-10 h-10 bg-deepTeal-100 rounded-lg flex items-center justify-center mr-3">
                       <FileText className="w-5 h-5 text-deepTeal-600" />
                     </div>
                     <div>
                       <h4 className="font-medium text-charcoal-900">Service Guide</h4>
                       <p className="text-sm text-charcoal-600">Detailed service descriptions</p>
                     </div>
                   </div>
                   <button className="text-deepTeal-600 hover:text-deepTeal-700">
                     <Download className="w-5 h-5" />
                   </button>
                 </div>

                                 <div className="flex items-center justify-between p-4 bg-navy-50 rounded-lg">
                   <div className="flex items-center">
                     <div className="w-10 h-10 bg-deepTeal-100 rounded-lg flex items-center justify-center mr-3">
                       <Play className="w-5 h-5 text-deepTeal-600" />
                     </div>
                     <div>
                       <h4 className="font-medium text-charcoal-900">Video Introduction</h4>
                       <p className="text-sm text-charcoal-600">3-minute overview</p>
                     </div>
                   </div>
                   <button className="text-deepTeal-600 hover:text-deepTeal-700">
                     <ExternalLink className="w-5 h-5" />
                   </button>
                 </div>

                                 <div className="flex items-center justify-between p-4 bg-navy-50 rounded-lg">
                   <div className="flex items-center">
                     <div className="w-10 h-10 bg-deepTeal-100 rounded-lg flex items-center justify-center mr-3">
                       <FileText className="w-5 h-5 text-deepTeal-600" />
                     </div>
                     <div>
                       <h4 className="font-medium text-charcoal-900">Case Study Portfolio</h4>
                       <p className="text-sm text-charcoal-600">Detailed project examples</p>
                     </div>
                   </div>
                   <button className="text-deepTeal-600 hover:text-deepTeal-700">
                     <Download className="w-5 h-5" />
                   </button>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-charcoal-100">
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-4">
              Ready to Learn More?
            </h3>
            <p className="text-lg text-charcoal-600 mb-8 max-w-2xl mx-auto">
              Download our pitch deck to explore how our scientific expertise 
              can accelerate your research and development initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Download Complete Package
              </button>
              <button className="btn-secondary">
                Schedule a Presentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PitchDeck; 