import { API_URLS } from "@/api/consts";
import { get } from "@/api/handler";

export const createShortLink = async <T>() => {
  return await get<T>({
    url: API_URLS.LINK.CREATE_SHORT,
  });
};
