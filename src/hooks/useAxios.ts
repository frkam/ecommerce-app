import { useState, useEffect } from "react";

import axios from "axios";
import { IProduct } from "types/products.types";

export const useAxios = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IProduct>();
  const [error, setError] = useState(null);

  const fetchData = (url: string) => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return {data, isLoading, error};
};
