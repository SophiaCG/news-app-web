import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import NewsBox from "./components/NewsBox";
import NewsRowGroup from "./components/NewsRowGroup";
import NewsColumnGroup from "./components/NewsColumnGroup";
import BookmarksButton from "./components/BookmarksButton";
import { Link } from "react-router-dom";

function HomePage() {
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
    <div className="App">
      {/* Pass the fetchData function to the NavBar component */}
      <NavBar fetchData={fetchData} />
      <div id="news-container">
        <div id="header-container">
          <div id="header-container">
            <h1 id="news-header">The News</h1>
            <Link to="/bookmarks">
              <BookmarksButton />
            </Link>
          </div>
        </div>
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

export default HomePage;
