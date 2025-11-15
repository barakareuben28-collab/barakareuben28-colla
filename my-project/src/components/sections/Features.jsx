import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import SectionWrapper from '../common/SectionWrapper';

export default function Features() {
  const services = [
    { 
      title: 'Free Consultation', 
      description: 'Get expert advice on choosing the right office equipment for your workspace' 
    },
    { 
      title: 'Installation Service', 
      description: 'Professional setup and installation of all office equipment at your location' 
    },
  ];

  const categories = ['Desks', 'Chairs', 'Storage', 'Lighting'];

  const products = [
    { name: 'Executive Desk', price: '$299.00', originalPrice: '$349.00' },
    { name: 'Ergonomic Chair', price: '$199.00', originalPrice: null },
    { name: 'Filing Cabinet', price: '$149.00', originalPrice: null },
    { name: 'LED Desk Lamp', price: '$89.00', originalPrice: '$109.00' },
    { name: 'Monitor Stand', price: '$45.00', originalPrice: '$55.00' },
    { name: 'Keyboard Tray', price: '$65.00', originalPrice: '$79.00' },
    { name: 'Office Organizer', price: '$34.99', originalPrice: '$45.00' },
    { name: 'Premium Desk Mat', price: '$79.99', originalPrice: '$99.00' },
  ];

  return (
    <>
      {/* Promo Section with Image and Text */}
      <SectionWrapper id="promo" bgColor="bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">Premium Office Gear</h2>
            <p className="text-sm md:text-base text-neutral-700 mb-4 leading-relaxed">
              Discover our exclusive range of high-quality office equipment designed for modern workspaces.
            </p>
            <Button variant="primary" size="sm">View Collection</Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              alt="Premium office equipment collection"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper id="features" bgColor="bg-white" bordered>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">Premium Office Solutions</h2>
          <p className="text-sm md:text-base text-neutral-600 max-w-3xl mx-auto">
            High-quality equipment and workspace solutions for modern businesses
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">Featured Products</h2>
          <p className="text-sm md:text-base text-neutral-600 mb-6">
            Check out our latest office equipment with special discounts
          </p>
          <Button variant="outline" size="sm">View All Products</Button>
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
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=400&fit=crop"
              alt="Modern office workspace"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">Ergonomic Design</h3>
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
              Our office equipment is designed with ergonomics in mind. Each product enhances comfort and productivity while maintaining a modern, professional aesthetic.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">Built to Last</h3>
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
              Premium materials and expert craftsmanship ensure durability. All our office equipment meets international quality standards and comes with comprehensive warranties.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
              alt="Premium office equipment"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Description Section */}
      <SectionWrapper id="description" bgColor="bg-white" bordered>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Your Complete Office Solution Partner</h2>
          <p className="text-sm md:text-base text-neutral-600">
            We provide comprehensive office equipment solutions for businesses of all sizes. From startups to enterprises, we help create productive, comfortable, and professional workspaces.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
