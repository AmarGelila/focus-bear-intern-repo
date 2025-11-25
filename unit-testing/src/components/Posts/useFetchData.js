import { useState, useEffect } from "react";
function useFetchData(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        if (!data) {
          throw new Error("NO Data Available");
        } else {
          setData(data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setError("An error occured while getting data from server");
        setLoading(false);
        throw new Error(`Fetch Error: ${err}`);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
}
export default useFetchData;
