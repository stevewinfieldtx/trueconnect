
export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export interface User {
  id: string;
  firstName: string;
  age: number;
  location: string;
  occupation?: string;
  education?: string;
  bio: string;
  gender: Gender;
  trustScore: number;
  languages: string[];
  avatar: string;
  isVerified: boolean;
}

export interface Match extends User {
  compatibility: string;
  photoCount: number;
  isNew?: boolean;
  isOnline?: boolean;
  lastActive?: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  translatedText?: string;
  timestamp: string;
  isMeaningful?: boolean;
  status?: 'sent' | 'delivered' | 'read';
  flagged?: string;
}

export interface Conversation {
  id: string;
  partner: Match;
  lastMessage: Message;
  unreadCount: number;
  meaningfulCount: number;
  isPhotoUnlocked: boolean;
  status: 'active' | 'waiting' | 'stale' | 'shared';
}

export enum PlanType {
  FREE = 'Free',
  BASIC = 'Basic',
  PREMIUM = 'Premium',
  ULTIMATE = 'Ultimate'
}
