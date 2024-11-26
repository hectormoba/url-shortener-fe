export const API_URLS = {
  LINK: {
    INDEX: `/link`,
    GET_ALL: "/link/all",
    GENERATE: `link/generate`,
    CREATE: "/link/create-short",
  },
  USER: {
    INDEX: "/user",
    LOGIN: "/user/login",
    REGISTER: "/user/register",
  },
} as const;
