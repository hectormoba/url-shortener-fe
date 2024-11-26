import { API_URLS } from "./consts";

export type ApiUrlsValues =
  | (typeof API_URLS)["LINK"][keyof (typeof API_URLS)["LINK"]]
  | (typeof API_URLS)["USER"][keyof (typeof API_URLS)["USER"]];

export interface GetHandlerParams {
  url: ApiUrlsValues;
  options?: RequestInit;
}
export type PostHandlerParams<BodyRequest> = GetHandlerParams & {
  body: BodyRequest;
};

export interface GetFromAPIParams {
  getFn: <T = unknown>(req?: GetHandlerParams) => Promise<T>;
}

export interface PostToAPIParams {
  postFn: (body?: any) => Promise<DefaultPostAPIResponseData>;
}

export interface GetAPIResponse<Data> {
  data?: Data;
  error?: any;
  isSuccess: boolean;
  isError: boolean;
}

export interface PostAPIResponse<Data = DefaultPostAPIResponseData> {
  data?: Data;
  error?: any;
  isSuccess: boolean;
  isError: boolean;
}

export interface DefaultPostAPIResponseData {
  message: string;
}
