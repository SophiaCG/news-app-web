// src/App.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import NewsBox from "./components/NewsBox";
import NewsRowGroup from "./components/NewsRowGroup";
import NewsColumnGroup from "./components/NewsColumnGroup";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Modify the fetchData function to accept a query parameter
  const fetchData = (query) => {
    setLoading(true);

    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=`)
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
    <div className="App">
      {/* Pass the fetchData function to the NavBar component */}
      <NavBar fetchData={fetchData} />
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
