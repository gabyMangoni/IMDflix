import { useEffect, useState, useRef } from 'react';

export const useFetch = () => {
  const [allImages, setImages] = useState([]);
  const [expression, setExpression] = useState(['Marvel']);

  const [loading, setLoading] = useState(false);

  const inputTag = useRef();

  useEffect(() => {
    const endpoint = async () => {
      try {
        const apiKey = 'k_9y6ti2i8';
        const url = `https://imdb-api.com/es/API/Search/${apiKey}/${expression}`;
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results);
        setLoading(false);
        setImages(data.results);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };

    endpoint();
  }, [expression]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputTag.current.value;
    setExpression(inputValue);
    inputTag.current.value = '';
  };
  return [allImages, loading, expression, inputTag, handleSubmit];
};
