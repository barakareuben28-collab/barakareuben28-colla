import React from 'react';
import SectionWrapper from '../common/SectionWrapper';

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" bgColor="bg-white" bordered>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">What our clients say</h2>
        
        <div className="bg-white rounded-xl p-6 md:p-8 mt-10 border border-neutral-200">
          <p className="text-sm md:text-base text-neutral-700 mb-6">
            "Excellent quality products and outstanding customer service. They helped us completely transform our office into a productive and comfortable workspace."
          </p>
          
          <div>
            <p className="font-bold text-sm md:text-base text-neutral-900">Sarah Johnson</p>
            <p className="text-xs md:text-sm text-neutral-600">CEO, Tech Innovations Inc.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
