export type HttpAdapterResponse = Record<string, unknown>;

export type HttpClientMethod = (
  endpoint: string,
  config?: Record<string, any>
) => Promise<HttpAdapterResponse>;

export type HttpClientMethodWithData = (
  endpoint: string,
  data: Record<string, any>,
  config?: Record<string, any>
) => Promise<HttpAdapterResponse>;

export interface HttpClient {
  get: HttpClientMethod;
  post: HttpClientMethodWithData;
  put: HttpClientMethodWithData;
  delete: HttpClientMethod;
  patch: HttpClientMethodWithData;
}
