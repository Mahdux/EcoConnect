export interface User {
  id: string;
  name: string;
  email: string;
  role: 'individual' | 'ngo' | 'company' | 'expert';
  avatar?: string;
  bio?: string;
  expertise?: string[];
  location?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: Date;
  category: string;
  likes: number;
  comments: number;
  tags?: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  type: 'online' | 'in-person';
  organizer: User;
  capacity: number;
  attendees: User[];
  price?: number;
  tags?: string[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'video' | 'article' | 'presentation';
  url: string;
  author: User;
  uploadDate: Date;
  downloads: number;
  category: string;
  tags?: string[];
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
  likes: number;
  parentId?: string;
}