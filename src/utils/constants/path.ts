export const PATH = {
  AUTH: {
    LOGIN: 'auth/login',
    REGISTER: 'auth/register',
  },

  PROFIE: {
    REGISTER: '/profile',
    UPDATE: (userId: number) => `/profile${userId}`,
  },

  MYPAGE: {
    INDEX: '/mypage',
  },
} as const;
