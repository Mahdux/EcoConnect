import React from 'react';
import { useForm } from 'react-hook-form';
import { MessageSquare, ThumbsUp, MessageCircle } from 'lucide-react';

export function Forum() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  const posts = [
    {
      id: '1',
      title: 'Solar Panel Installation Best Practices',
      content: 'Looking for advice on residential solar panel installation...',
      author: { name: 'John Doe', avatar: 'https://i.pravatar.cc/40?img=1' },
      category: 'Solar Energy',
      likes: 24,
      comments: 12,
      createdAt: new Date('2024-03-10'),
    },
    // Add more sample posts
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Community Forum</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow p-6">
          <div className="mb-4">
            <input
              {...register('title')}
              placeholder="Post title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              {...register('content')}
              placeholder="Share your thoughts..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Post
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="flex items-center space-x-4 text-gray-500">
              <button className="flex items-center space-x-1 hover:text-green-600">
                <ThumbsUp className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-green-600">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}