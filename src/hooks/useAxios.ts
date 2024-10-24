import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface AxiosHook<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useAxios = <T = unknown>(
  url: string,
  config?: AxiosRequestConfig
): AxiosHook<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<T>(url, config);
        setData(response.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, config]);

  return { data, loading, error };
};

export default useAxios;
