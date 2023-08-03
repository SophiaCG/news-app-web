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

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const calculateTimeDifference = (dateString) => {
  const currentDate = new Date();
  const postDate = new Date(dateString);
  const timeDifference = Math.floor(
    (currentDate - postDate) / (1000 * 60 * 60 * 24)
  );

  if (timeDifference < 1) {
    const minutesDifference = Math.floor(
      (currentDate - postDate) / (1000 * 60)
    );
    if (minutesDifference < 1) {
      return "Just now";
    } else if (minutesDifference < 60) {
      return `${minutesDifference} ${
        minutesDifference === 1 ? "minute" : "minutes"
      } ago`;
    } else {
      const hours = Math.floor(minutesDifference / 60);
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    }
  } else {
    return `${timeDifference} ${timeDifference === 1 ? "day" : "days"} ago`;
  }
};
