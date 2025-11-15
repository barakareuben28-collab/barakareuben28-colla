import React from 'react';
import SectionWrapper from '../common/SectionWrapper';

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" bgColor="bg-white" bordered>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">What people are saying about us</h2>
        
        <div className="bg-white rounded-xl p-6 md:p-8 mt-10 border border-neutral-200">
          <p className="text-sm md:text-base text-neutral-700 mb-6">
            "They have a perfect touch for make something so professional, interest and useful for a lot of people."
          </p>
          
          <div>
            <p className="font-bold text-sm md:text-base text-neutral-900">Josh Smith</p>
            <p className="text-xs md:text-sm text-neutral-600">Manager of The New York Times</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
