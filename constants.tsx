
import { Gender, Match, Conversation, Message } from './types';

export const DUMMY_MATCHES: Match[] = [
  {
    id: '1',
    firstName: 'Linh',
    age: 28,
    location: 'Ho Chi Minh City, Vietnam',
    bio: 'I love traditional cooking and exploring new coffee shops on weekends. Looking for someone kind and honest to share life with.',
    gender: Gender.FEMALE,
    trustScore: 95,
    languages: ['EN', 'VN'],
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbDTJiF1B3jtgSbuw8e_5hEVQTv8cjDX75t3t5wipzk531IoBCsgdENW_omTeYHRSV0PgyhHgEwDqyhITyg9h3BtLSeDmmv5C_wSGH1xOQtdTCrxH9ROUXHglfp3v1D6m3cjE1X-E0r22JqQGWH9HqarUPWeAyO1Bwu2TLU8lSTzHceEONc88nqRmCaGOHY87LLR-Nh-Vv46IahnsEqiSG7cW6vaC7hgJpViyx8y2a6mEShGseqQmc6LB37NOuuhk-_S_pRbpmUsHo',
    isVerified: true,
    compatibility: 'You both value family traditions and enjoy weekend hiking trips.',
    photoCount: 4,
    isOnline: true
  },
  {
    id: '2',
    firstName: 'Sarah',
    age: 26,
    location: 'Da Nang, Vietnam',
    bio: 'Digital nomad currently based in Da Nang. I enjoy yoga, beach sunsets, and learning Vietnamese.',
    gender: Gender.FEMALE,
    trustScore: 88,
    languages: ['EN'],
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaPxhjsO7UHVwDWBXymvSnZ3rPQLdu6xuyqe4sA9v7gnKpxorXmTd2gqCxLHkvCzzqh8LsfydXv6zM3X65MyrvqPh5T2b_wtuA_cwy9P6lG0kms8bA2i5YMYjKkVrshyEWyo0l3Pt49DXdnSzjKObCL6SV8kw6qkuHHNxHiidwVN43JYxvpNFuKbh9KrizoPOGP-dBTn7XFrkMVk48VOOcD44Pkblg5io_fzmvB1xNjgs_qMe_F1I0c8JUC0SlieXZfb5uFfhZyy1E',
    isVerified: false,
    compatibility: 'Strong interest in wellness and travel.',
    photoCount: 6,
    isNew: true
  },
  {
    id: '3',
    firstName: 'Mai',
    age: 29,
    location: 'Hanoi, Vietnam',
    bio: 'Always looking for the next adventure. Let\'s talk!',
    gender: Gender.FEMALE,
    trustScore: 99,
    languages: ['VN', 'EN'],
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKRgk_KD1fTt7c5R16ddCVqukDDA9HP38M34peLeZJvz027lTW30ZF_dnqWpEJtqCCW-JYpfkRLpOhRBtCmOc0b2x1mBV4MZDPm82oZUSjMQx-xBHLtxWlrLq7HcV84dGr8gjqppEum6X6FcjDZabKtVhFxPfa_28uk_HyDbFW2jKXlg2CglvCPhFd5NfQPwSFQDS_fV2a9ThjG2xvJo_hlB-SRHZJjBIjn6NkEyMVflOdeEG-lHRcQZlWXcexQHXA_IUJlXp8t3p0',
    isVerified: true,
    compatibility: 'Mutual love for exploring Hanoi\'s hidden gems.',
    photoCount: 5,
    lastActive: '2h ago'
  }
];

export const DUMMY_CONVERSATIONS: Conversation[] = [
  {
    id: 'c1',
    partner: DUMMY_MATCHES[0],
    lastMessage: {
      id: 'm1',
      senderId: '1',
      text: 'Did you see the new exhibit?',
      timestamp: 'Yesterday',
      status: 'read'
    },
    unreadCount: 0,
    meaningfulCount: 3,
    isPhotoUnlocked: true,
    status: 'active'
  },
  {
    id: 'c2',
    partner: DUMMY_MATCHES[1],
    lastMessage: {
      id: 'm2',
      senderId: 'user',
      text: 'Let\'s connect off-platform :)',
      timestamp: 'Mon',
      status: 'read'
    },
    unreadCount: 0,
    meaningfulCount: 5,
    isPhotoUnlocked: true,
    status: 'shared'
  }
];
