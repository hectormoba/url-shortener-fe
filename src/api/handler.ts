import {
  GetHandlerParams,
  PostHandlerParams,
  GetFromAPIParams,
  GetAPIResponse,
  PostAPIResponse,
  DefaultPostAPIResponseData,
} from "./handels.types";
import { getBaseURL } from "./utils";
import { PostToAPIParams } from "./handels.types";

export const get = async <ResponseType>({
  url,
  options = {},
}: GetHandlerParams): Promise<ResponseType> => {
  options.method = "GET";
  const urlWithBase = getBaseURL(url);
  const response = await fetch(urlWithBase, options);
  const data = await response.json();
  return data as ResponseType;
};

export const post = async <BodyType>({
  url,
  body,
  options = {},
}: PostHandlerParams<BodyType>) => {
  options.method = "POST";
  const urlWithBase = getBaseURL(url);
  const response = await fetch(urlWithBase, {
    ...options,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data as DefaultPostAPIResponseData;
};

export const getQuery = async <DataRes>({
  getFn,
}: GetFromAPIParams): Promise<GetAPIResponse<DataRes>> => {
  try {
    const data = await getFn<DataRes>();
    return {
      data,
      isSuccess: true,
      isError: false,
    };
  } catch (error) {
    return {
      isError: true,
      isSuccess: false,
    };
  }
};

export const postQuery = async ({
  postFn,
}: PostToAPIParams): Promise<PostAPIResponse> => {
  try {
    const data = await postFn();
    return {
      data,
      isSuccess: true,
      isError: false,
    };
  } catch (error) {
    return {
      isError: true,
      isSuccess: false,
    };
  }
};
