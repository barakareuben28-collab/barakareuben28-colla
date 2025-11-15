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
              Professional Office
              <br />
              <span className="text-primary-600">Premium Equipment</span>
              <br />
              Solutions
            </h1>

            <p className="text-sm md:text-base text-neutral-600 mb-6 leading-relaxed max-w-xl">
              We provide high-quality office equipment and workspace solutions to enhance your productivity and comfort.
            </p>

            <Button variant="primary" size="md">
              Explore Products
            </Button>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ResponsiveImage
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop"
                alt="Modern office workspace"
                priority={true}
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-12 border-t border-neutral-100">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">15+</div>
            <p className="text-xs md:text-sm text-neutral-600">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">500+</div>
            <p className="text-xs md:text-sm text-neutral-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">1000+</div>
            <p className="text-xs md:text-sm text-neutral-600">Products Available</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">24/7</div>
            <p className="text-xs md:text-sm text-neutral-600">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
