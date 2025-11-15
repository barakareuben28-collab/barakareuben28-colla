import React from 'react';
import Button from '../common/Button';
import ResponsiveImage from '../common/ResponsiveImage';

export default function Hero() {
  return (
    <section id="home" className="bg-white pt-20 md:pt-24 lg:pt-32 pb-16 md:pb-20 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
              Creative Home
              <br />
              <span className="text-primary-600">Simplify your</span>
              <br />
              Furniture
            </h1>

            <p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-xl">
              We create your home more aesthetic and comfortable with our premium furniture collection.
            </p>

            <Button variant="primary" size="lg">
              Shop Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ResponsiveImage
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"
                alt="Beautiful modern furniture"
                priority={true}
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-20 border-t border-neutral-100">
          <div className="text-center">
            <div className="text-4xl font-bold text-neutral-900 mb-2">7</div>
            <p className="text-neutral-600">Year Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neutral-900 mb-2">2</div>
            <p className="text-neutral-600">Opened in the country</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neutral-900 mb-2">10k+</div>
            <p className="text-neutral-600">Furniture sold</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neutral-900 mb-2">260+</div>
            <p className="text-neutral-600">Variant Furniture</p>
          </div>
        </div>
      </div>
    </section>
  );
}
