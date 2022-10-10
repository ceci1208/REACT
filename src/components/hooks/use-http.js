import { useCallback, useState } from "react";

function useHttp() {
//   const BASE_URL = "https://react-http-a419f-default-rtdb.firebaseio.com/";

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const request = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      console.log("Entro");
      

      if (!response.ok) throw new Error("Algo salió mal :(");

      setIsLoading(false);
      return await response.json();
      

    } catch (err) {
      setError(err.message);
      console.log("Error Catch")
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, request };
}



export default useHttp;