import React from 'react';

export function HeroSection() {
  return (
    <div className="relative bg-green-700">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Renewable energy"
        />
        <div className="absolute inset-0 bg-green-700 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Building a Sustainable Future Together
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-green-100">
          Join the global community of sustainability leaders, experts, and enthusiasts. 
          Share knowledge, find collaborators, and make a real impact on our planet.
        </p>
        <div className="mt-10 flex space-x-4">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50">
            Get Started
          </button>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}