import React from 'react';
import { Sun, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const navigation = {
    main: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    social: [
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'LinkedIn', href: '#', icon: Linkedin },
      { name: 'GitHub', href: '#', icon: Github },
    ],
  };

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        
        <div className="mt-8 md:mt-0 md:order-1">
          <div className="flex justify-center items-center mb-4">
            <Sun className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">EcoConnect</span>
          </div>
          
          <nav className="flex justify-center space-x-8 mb-8">
            {navigation.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-600"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} EcoConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}