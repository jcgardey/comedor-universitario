import { useEffect, useState } from 'react';

export const useFetch = (service, callback, ...params) => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    service(...params)
      .then((response) => {
        setData(response.data);
        if (callback) callback(response.data);
      })
      .catch((error) => setErrors(error.response.data));
  }, []);

  return [data, errors];
};
