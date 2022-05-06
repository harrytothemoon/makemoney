import clientSideCookie from "./clientSideCookie";
import { TOKEN } from "../constants/cookieNames";

const getHeaders = ({ options, authToken }) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...options?.headers,
    ...(authToken && { Authorization: `Bearer ${authToken}` }),
  };

  // when fetch's request body is FormData, content-type header should leave
  // blank and fetch will add it automatically
  if (options?.isFormData) {
    delete headers["Content-Type"];
  }

  return headers;
};

const getBody = ({ isFormData, body }) => {
  if (isFormData) {
    return body;
  }

  return body && JSON.stringify(body);
};

export default function createFetchAPI(fetch, basicOptions = {}) {
  const { serverContext } = basicOptions;

  return async (url, options = {}) => {
    const authToken = serverContext ? serverContext.cookies[TOKEN] : clientSideCookie.get(TOKEN);

    const headers = getHeaders({ options, authToken });
    const body = getBody(options);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}${url}`, {
      method: "GET",
      mode: "cors",
      ...options,
      headers,
      ...(body && { body }),
    });

    // in case the body is empty, can't be parsed
    const content = await res.text();
    const data = content.length > 0 ? JSON.parse(content) : {};

    if (!res.ok) {
      // TODO: to handle application-level errors here, e.g., authorization expired
      return Promise.reject(data);
    }

    return data.data;
  };
}
