import { useState } from "react";

const useApiCall = () => {
  const [data, setData] = useState([]);

  const fetchData = async (text) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Recommend movies based on the user's prompt:\n\n" +
          "User Prompt: " + text + "\n" +
          "Additional Recommendations: recommended, most watched movies\n" +
          "Output Format: Only include the title of the recommendation. Separate each category with a semicolon (;).\n" +
          "Please provide a minimum of 5 diverse recommendations for each category, without any additional text.\n" +
          "To ensure diversity, try to include a mix of popular and lesser-known movies.\n" +
          "Avoid repetitive recommendations by considering different genres, directors, or release years.\n",
        temperature: 0.8,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.2,
        presence_penalty: 0.5,
      }),
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/completions",
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
