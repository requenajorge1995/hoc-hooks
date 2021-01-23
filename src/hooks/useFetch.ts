import { useState, useEffect } from "react";

export default function useFetch<T>(url: string, init?: any) {
  const [data, setData] = useState(undefined as T | undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null as Error | null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, init);
        if (!res.ok) throw new Error(res.statusText);
        setData((await res.json()) as T);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, isLoading, error };
}
