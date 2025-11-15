import React, { useState } from 'react';
import Button from '../common/Button';
import SectionWrapper from '../common/SectionWrapper';

export default function CTA() {
  const [email, setEmail] = useState('');

  return (
    <SectionWrapper id="cta" bgColor="bg-white" bordered>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-2">Get more discount</h2>
        <p className="text-lg md:text-xl font-bold text-primary-600 mb-4">Off your order</p>
        <p className="text-sm md:text-base text-neutral-600 mb-6">Join our mailing list</p>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
          />
          <Button variant="primary" size="md">Shop Now</Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
