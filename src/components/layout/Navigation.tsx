import React from 'react';
import { NavLink } from 'react-router-dom';
import { MessageSquare, Calendar, BookOpen, Users } from 'lucide-react';

export function Navigation() {
  const navItems = [
    { to: '/forum', icon: <MessageSquare />, label: 'Forum' },
    { to: '/events', icon: <Calendar />, label: 'Events' },
    { to: '/library', icon: <BookOpen />, label: 'Library' },
    { to: '/network', icon: <Users />, label: 'Network' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 text-sm font-medium ${
                  isActive
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`
              }
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}