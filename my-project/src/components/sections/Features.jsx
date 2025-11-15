import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import SectionWrapper from '../common/SectionWrapper';

export default function Features() {
  const services = [
    { 
      title: 'Valuation Services', 
      description: 'Sometimes features require a short description. This can be detailed description' 
    },
    { 
      title: 'Development of Furniture Models', 
      description: 'Sometimes features require a short description. This can be detailed description' 
    },
  ];

  const categories = ['Chair', 'Bed', 'Cupboard', 'Lighting'];

  const products = [
    { name: 'Ceiling Light', price: '$75.00', originalPrice: '$82.00' },
    { name: 'Wood Chair', price: '$50.00', originalPrice: null },
    { name: 'Papper Cupboard', price: '$70.00', originalPrice: null },
    { name: 'Ole Gundorse Spring...', price: '$105.00', originalPrice: '$120.00' },
    { name: 'Treos Seroes 911', price: '$82.00', originalPrice: '$100.00' },
    { name: 'Multi bilderman slibber...', price: '$200.00', originalPrice: '$210.00' },
    { name: 'XORA corner desk', price: '$45.00', originalPrice: '$50.00' },
    { name: 'Black Forest Series wo...', price: '$320.00', originalPrice: '$325.00' },
  ];

  return (
    <>
      {/* Services Section */}
      <SectionWrapper id="features" bgColor="bg-white" bordered>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">We Create your home more aestetic</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Furniture power is a software as services for multipurpose business management system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <Card
              key={idx}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* New In Store Section */}
      <SectionWrapper id="new-store" bgColor="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">New In Store Now</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Get the latest items immediately with promo prices
          </p>
          <Button variant="outline" size="md">Check All</Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 my-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-6 py-2 border border-neutral-300 rounded-lg hover:border-neutral-900 transition-colors text-neutral-700 hover:text-neutral-900"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow border border-neutral-200">
              <div className="bg-neutral-200 h-48 rounded-lg mb-4"></div>
              <p className="font-medium text-neutral-900 mb-2">{product.name}</p>
              <div className="flex items-center gap-2">
                <span className="font-bold text-neutral-900">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm line-through text-neutral-500">{product.originalPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Description Section */}
      <SectionWrapper id="description" bgColor="bg-white" bordered>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">The Best Furniture Manufacturer of your choice</h2>
          <p className="text-lg text-neutral-600">
            Furniture power is a software as services for multipurpose business management system, especially for them who are running two or more business. Explore the future of Furniture power
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
