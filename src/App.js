import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import NewsBox from "./components/NewsBox";
import NewsRowGroup from "./components/NewsRowGroup";
import NewsColumnGroup from "./components/NewsColumnGroup";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make the API call using fetch
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=")
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data.articles[0].title);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || !data.articles) {
    return <div>No articles found.</div>;
  }

  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="news-container">
        <div id="first-section">
          <NewsBox props={data.articles[0]}></NewsBox>
          <NewsRowGroup data={data}></NewsRowGroup>
        </div>
        <div id="second-section">
          <NewsColumnGroup data={data}></NewsColumnGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
