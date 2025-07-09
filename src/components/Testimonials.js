import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Director of R&D',
      company: 'BioTech Innovations',
      content: 'Dr. Nwokonkwo transformed our drug discovery process. His expertise in analytical chemistry and systematic approach helped us reduce our development timeline by 40% while improving our success rate significantly.',
      rating: 5,
      industry: 'Pharmaceuticals'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Chief Technology Officer',
      company: 'Green Energy Solutions',
      content: 'Working with Dr. Nwokonkwo was a game-changer for our renewable energy research. His deep understanding of materials science and practical approach to scaling up processes exceeded our expectations.',
      rating: 5,
      industry: 'Energy'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'VP of Research',
      company: 'Advanced Materials Corp',
      content: 'The level of expertise and attention to detail Dr. Nwokonkwo brings to every project is exceptional. His recommendations led to breakthrough improvements in our composite materials.',
      rating: 5,
      industry: 'Manufacturing'
    },
    {
      name: 'James Thompson',
      title: 'Founder & CEO',
      company: 'EcoTech Systems',
      content: 'Dr. Nwokonkwo helped us navigate complex environmental regulations while developing innovative bioremediation solutions. His strategic guidance was invaluable to our success.',
      rating: 5,
      industry: 'Environmental'
    },
    {
      name: 'Dr. Lisa Park',
      title: 'Head of Innovation',
      company: 'NanoTech Industries',
      content: 'The systematic approach and scientific rigor Dr. Nwokonkwo applied to our nanotechnology research accelerated our development timeline and improved our patent portfolio significantly.',
      rating: 5,
      industry: 'Technology'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Hear from industry leaders who have experienced the transformative 
            impact of our scientific consulting services.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-navy-50 rounded-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-emerald-200">
              <Quote size={32} />
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              <p className="text-lg md:text-xl text-charcoal-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Client Info */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-charcoal-900 mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-charcoal-600 mb-2">
                  {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                </p>
                                 <div className="inline-flex items-center px-3 py-1 rounded-full bg-deepTeal-100 text-deepTeal-800 text-sm font-medium">
                   {testimonials[currentIndex].industry}
                 </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-charcoal-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-charcoal-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                                 className={`w-3 h-3 rounded-full transition-all duration-200 ${
                   index === currentIndex 
                     ? 'bg-deepTeal-600' 
                     : 'bg-charcoal-300 hover:bg-charcoal-400'
                 }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 card-hover border border-charcoal-100"
            >
                             <div className="flex items-center mb-4">
                 <Quote className="w-6 h-6 text-deepTeal-400 mr-2" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-charcoal-600 text-sm leading-relaxed mb-4">
                "{testimonial.content.substring(0, 120)}..."
              </p>

              <div>
                <h4 className="font-semibold text-charcoal-900 text-sm">
                  {testimonial.name}
                </h4>
                <p className="text-charcoal-600 text-xs">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-charcoal-600 mb-6">
            Join the growing list of satisfied clients who have transformed their 
            scientific initiatives with our expertise.
          </p>
          <button className="btn-primary">
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 