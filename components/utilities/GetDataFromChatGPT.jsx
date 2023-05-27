import { useState } from 'react';

const useApiCall = () => {
  const [data, setData] = useState([]);

  const fetchData = async (text) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt:
          'recommend 5 movies similar to this movie, provide comma seperated list:\n\n' +
          text +
          '',
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    };

    try {
      const response = await fetch(
        'https://api.openai.com/v1/completions',
        options
      );
      const json = await response.json();
      const extractedData = json.choices[0].text.trim();
      setData(extractedData);
      return extractedData;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    data,
    fetchData,
  };
};

export default useApiCall;
