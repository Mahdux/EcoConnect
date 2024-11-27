import React from 'react';
import { Leaf, Users, Calendar } from 'lucide-react';

export function FeaturedSection() {
  const features = [
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: "Knowledge Hub",
      description: "Access curated resources and insights from sustainability experts"
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Connect & Collaborate",
      description: "Find partners and collaborate on impactful sustainability projects"
    },
    {
      icon: <Calendar className="h-6 w-6 text-green-600" />,
      title: "Events & Webinars",
      description: "Join exclusive events and learn from industry leaders"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Empowering Sustainable Change</h2>
          <p className="mt-4 text-xl text-gray-600">Connect with sustainability leaders and drive positive environmental impact</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute top-6 left-6">{feature.icon}</div>
              <div className="ml-12">
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}