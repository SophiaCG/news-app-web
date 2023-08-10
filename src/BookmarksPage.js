import React, { useState, useEffect } from "react";
import BookmarksRowGroup from "./components/BookmarksRowGroup";

const BookmarksPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Modify the fetchData function to accept a query parameter
  const fetchData = (query) => {
    setLoading(true);

    fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=dee142a160b4462b9258ac52eaf98161`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(URL);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    // Make the initial API call with the default query "us"
    fetchData("us");
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || !data.articles) {
    return <div>No articles found.</div>;
  }

  return (
    <div>
      <BookmarksRowGroup data={data}></BookmarksRowGroup>
    </div>
  );
};

export default BookmarksPage;
