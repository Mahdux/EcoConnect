import React, { useState } from 'react';
import { BookOpen, Download, Search, Filter } from 'lucide-react';

export function Library() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      id: '1',
      title: 'Guide to Renewable Energy Implementation',
      description: 'Comprehensive guide for businesses transitioning to renewable energy.',
      type: 'pdf',
      author: { name: 'Energy Expert Group' },
      downloads: 1234,
      category: 'Guides',
    },
    // Add more sample resources
  ];

  const categories = [
    'all',
    'Guides',
    'Research Papers',
    'Case Studies',
    'Presentations',
    'Videos',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Resource Library</h1>
        <p className="mt-2 text-gray-600">Access our collection of sustainability resources</p>
      </div>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search resources..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 text-green-600" />
                <span className="ml-2 text-sm font-medium text-gray-500">{resource.type.toUpperCase()}</span>
              </div>
              <span className="text-sm text-gray-500">{resource.category}</span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{resource.author.name}</span>
              <button className="flex items-center text-green-600 hover:text-green-700">
                <Download className="w-5 h-5 mr-1" />
                <span>{resource.downloads}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}