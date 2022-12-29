/* eslint-disable @typescript-eslint/no-shadow */
import useSWR from 'swr';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || '';

export const useRequestSWR = <T>(url: string) => {
  const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN');

  const { data, error, mutate } = useSWR(
    `${baseURL + url}`,

    async (url: string) => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });

      const data = await response.json();

      return data;
    },
    {
      shouldRetryOnError: true,
      errorRetryCount: 3,
      errorRetryInterval: 1000,
      revalidateOnMount: true,
      revalidateOnFocus: true,
      refreshInterval: 1000,
      revalidateOnReconnect: true,
    },
  );

  const loading = !data && !error;

  return { data: data as T, error, mutate, loading };
};
