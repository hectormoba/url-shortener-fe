import {
  GetHandlerParams,
  PostHandlerParams,
  GetFromAPIParams,
  GetFromAPIResponse,
} from "./handels.types";

export const get = async <ResponseType>({
  url,
  options = {},
}: GetHandlerParams): Promise<ResponseType> => {
  options.method = "GET";
  const response = await fetch(url, options);
  const data = await response.json();
  return data as ResponseType;
};

export const post = async <BodyType, ResponseType>(
  req: PostHandlerParams<BodyType>
) => {
  const response = await fetch(req.url, {
    method: "POST",
    body: JSON.stringify(req.body),
  });
  const data = await response.json();
  return data as ResponseType;
};

export const getQuery = async <DataRes>({
  getFn,
}: GetFromAPIParams): Promise<GetFromAPIResponse<DataRes>> => {
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
