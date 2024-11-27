import React from 'react';
import { ArrowRight } from 'lucide-react';

export function LatestUpdates() {
  const updates = [
    {
      type: 'Event',
      title: 'Sustainable Energy Summit 2024',
      date: 'April 15, 2024',
      description: 'Join industry leaders to discuss the future of renewable energy.',
    },
    {
      type: 'Resource',
      title: 'Guide to Solar Implementation',
      date: 'March 10, 2024',
      description: 'New comprehensive guide for residential solar installation.',
    },
    {
      type: 'Forum',
      title: 'Community Discussion: Urban Farming',
      date: 'March 8, 2024',
      description: 'Growing conversation about sustainable urban agriculture practices.',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Latest Updates</h2>
          <button className="flex items-center text-green-600 hover:text-green-700">
            View all
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {updates.map((update, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                  {update.type}
                </span>
                <span className="text-sm text-gray-500">{update.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{update.title}</h3>
              <p className="text-gray-600">{update.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}