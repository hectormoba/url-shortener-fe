import { ApiUrlsValues } from "./handels.types";
const { VITE_API_URL: API_URL } = import.meta.env;

export const getBaseURL = (url: ApiUrlsValues): string => {
  return `${API_URL}${url}`;
};
