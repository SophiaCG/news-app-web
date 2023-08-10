import React from "react";
import BookmarksRow from "./BookmarksRow";

const BookmarksRowGroup = ({ data }) => {
  const renderRows = () => {
    const rows = [];
    for (let i = 1; i < 5; i++) {
      rows.push(<BookmarksRow props={data.articles[i]}></BookmarksRow>);
    }
    return rows;
  };

  return <div id="bookmarks-row-group">{renderRows()}</div>;
};

export default BookmarksRowGroup;
