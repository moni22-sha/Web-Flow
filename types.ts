import { ReactNode } from 'react';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'closed';
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: ReactNode;
}
 
export interface ServiceTestimonial{
  name:string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}