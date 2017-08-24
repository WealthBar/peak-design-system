import axios from 'axios';
import { DefaultError, AuthError } from '@/lib/utils/errors';

const instance = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const locationDependency = window.location;
export function responseHandler(response) { return response; }
export function errorHandler(error) {
  let errorMessage = error.message;
  if (error.response) {
    /* istanbul ignore else: when we have a response there will be data */
    if (error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }
    if (error.response.status === 401) {
      return Promise.reject(new AuthError(errorMessage, error));
    }
  }
  return Promise.reject(new DefaultError('UNKNOWN', errorMessage, error));
}

instance.interceptors.response.use(
  responseHandler,
  errorHandler,
);

export default instance;
