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
      {/* Promo Section with Image and Text */}
      <SectionWrapper id="promo" bgColor="bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">Premium Collection</h2>
            <p className="text-sm md:text-base text-neutral-700 mb-4 leading-relaxed">
              Discover our exclusive range of handcrafted furniture pieces designed for modern living.
            </p>
            <Button variant="primary" size="sm">Explore Now</Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1586023566565-e9a020bcf73c?w=600&h=400&fit=crop"
              alt="Premium furniture collection"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper id="features" bgColor="bg-white" bordered>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">We Create your home more aestetic</h2>
          <p className="text-sm md:text-base text-neutral-600 max-w-3xl mx-auto">
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
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">New In Store Now</h2>
          <p className="text-sm md:text-base text-neutral-600 mb-6">
            Get the latest items immediately with promo prices
          </p>
          <Button variant="outline" size="sm">Check All</Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 my-10">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-1.5 border border-neutral-300 rounded-md hover:border-neutral-900 transition-colors text-sm text-neutral-700 hover:text-neutral-900"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-lg p-3 hover:shadow-md transition-shadow border border-neutral-200">
              <div className="bg-neutral-200 h-32 md:h-40 rounded-lg mb-3"></div>
              <p className="font-medium text-xs md:text-sm text-neutral-900 mb-1.5 line-clamp-2">{product.name}</p>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-neutral-900">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs line-through text-neutral-500">{product.originalPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Image Showcase with Text */}
      <SectionWrapper id="showcase" bgColor="bg-neutral-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-lg overflow-hidden shadow-md">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop"
              alt="Modern furniture showcase"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">Elegant Design</h3>
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
              Our furniture combines elegance with functionality. Each piece is carefully crafted to enhance your living space with contemporary aesthetics and durability.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">Quality Assured</h3>
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
              Premium materials and expert craftsmanship ensure that every item in our collection meets the highest standards of quality and longevity.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1546439281-a78dff71a8d0?w=500&h=400&fit=crop"
              alt="Quality furniture craftsmanship"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Description Section */}
      <SectionWrapper id="description" bgColor="bg-white" bordered>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">The Best Furniture Manufacturer of your choice</h2>
          <p className="text-sm md:text-base text-neutral-600">
            Furniture power is a software as services for multipurpose business management system, especially for them who are running two or more business. Explore the future of Furniture power
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
