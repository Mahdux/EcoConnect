import React, { useState } from 'react';
import { User as UserIcon, Mail, MapPin, Award, Edit2, Save } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { User } from '../types';

const profileSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  bio: z.string().min(10).optional(),
  location: z.string().min(2).optional(),
  expertise: z.array(z.string()).optional(),
});

type ProfileForm = z.infer<typeof profileSchema>;

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data - in a real app, this would come from your auth context/API
  const user: User = {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    role: 'expert',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'Renewable energy consultant with 10+ years of experience in solar and wind power projects.',
    expertise: ['Solar Energy', 'Wind Power', 'Energy Storage'],
    location: 'San Francisco, CA',
  };

  const { register, handleSubmit, formState: { errors } } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      bio: user.bio,
      location: user.location,
      expertise: user.expertise,
    },
  });

  const onSubmit = (data: ProfileForm) => {
    console.log(data);
    setIsEditing(false);
    // Handle profile update
  };

  const activities = [
    {
      type: 'forum',
      title: 'Posted in Solar Panel Installation Best Practices',
      date: '2 days ago',
    },
    {
      type: 'event',
      title: 'Registered for Sustainable Energy Summit 2024',
      date: '1 week ago',
    },
    {
      type: 'resource',
      title: 'Downloaded Guide to Renewable Energy Implementation',
      date: '2 weeks ago',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              {isEditing ? (
                <Save className="h-5 w-5" />
              ) : (
                <Edit2 className="h-5 w-5" />
              )}
            </button>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  {...register('name')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  {...register('email')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Bio</label>
                <textarea
                  {...register('bio')}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.bio && (
                  <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  {...register('location')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Save Changes
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                {user.email}
              </div>
              
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                {user.location}
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">About</h3>
                <p className="text-gray-600">{user.bio}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {user.expertise?.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-md">
          <div className="divide-y divide-gray-200">
            {activities.map((activity, index) => (
              <div key={index} className="p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-gray-900">{activity.title}</span>
                  </div>
                  <span className="text-sm text-gray-500">{activity.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}