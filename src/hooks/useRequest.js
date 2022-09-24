import { useEffect, useState } from 'react';

export default function useRequest(request) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    request()
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return [data, isLoading, error];
}
