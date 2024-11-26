import { API_URLS } from "@/api/consts";
import { post } from "@/api/handler";

export const createShortLink = async (link: string) => {
  return await post({
    url: API_URLS.LINK.CREATE,
    body: { link },
  });
};
