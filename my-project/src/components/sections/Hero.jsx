import React from 'react';
import Button from '../common/Button';
import ResponsiveImage from '../common/ResponsiveImage';

export default function Hero() {
  return (
    <section id="home" className="bg-white pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              Creative Home
              <br />
              <span className="text-primary-600">Simplify your</span>
              <br />
              Furniture
            </h1>

            <p className="text-sm md:text-base text-neutral-600 mb-6 leading-relaxed max-w-xl">
              We create your home more aesthetic and comfortable with our premium furniture collection.
            </p>

            <Button variant="primary" size="md">
              Shop Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ResponsiveImage
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"
                alt="Beautiful modern furniture"
                priority={true}
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-12 border-t border-neutral-100">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">7</div>
            <p className="text-xs md:text-sm text-neutral-600">Year Experience</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">2</div>
            <p className="text-xs md:text-sm text-neutral-600">Opened in the country</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">10k+</div>
            <p className="text-xs md:text-sm text-neutral-600">Furniture sold</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">260+</div>
            <p className="text-xs md:text-sm text-neutral-600">Variant Furniture</p>
          </div>
        </div>
      </div>
    </section>
  );
}
