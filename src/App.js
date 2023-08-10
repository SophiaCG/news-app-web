import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import BookmarksPage from "./BookmarksPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/bookmarks" component={BookmarksPage} />
      </Switch>
    </Router>
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
