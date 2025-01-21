import camelcaseKeys from "camelcase-keys";
import { useState, useEffect } from "react";
import { FetchedData } from "../interfaces/FetchedData";

const useFetchData = () => {
  const [data, setData] = useState<FetchedData | undefined>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://c4rm9elh30.execute-api.us-east-1.amazonaws.com/default/cachedPriceData?ticker=C",
        );
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const result = await response.json();
        setData(camelcaseKeys(result, { deep: true }));
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    data,
    error,
    loading,
  };
};

export { useFetchData };
