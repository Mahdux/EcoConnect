import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { format } from 'date-fns';

export function Events() {
  const events = [
    {
      id: '1',
      title: 'Sustainable Energy Summit 2024',
      description: 'Join industry leaders to discuss the future of renewable energy.',
      date: new Date('2024-04-15'),
      location: 'Virtual Event',
      type: 'online',
      capacity: 500,
      attendees: 234,
      price: 0,
    },
    // Add more sample events
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
        <p className="mt-2 text-gray-600">Join our community events and webinars</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                  {event.type === 'online' ? 'Online' : 'In Person'}
                </span>
                {event.price === 0 ? (
                  <span className="text-green-600 font-medium">Free</span>
                ) : (
                  <span className="text-gray-900 font-medium">${event.price}</span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{format(event.date, 'MMMM d, yyyy')}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{event.attendees} / {event.capacity} attendees</span>
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}