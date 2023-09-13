import React from "react";
import BookmarksRow from "./BookmarksRow";

const BookmarksRowGroup = ({ data }) => {
  const renderRows = () => {
    const rows = [];

    for (let i = 0; i < data.length; i++) {
      rows.push(<BookmarksRow props={data[i]}></BookmarksRow>);
    }
    return rows;
  };

  return <div id="bookmarks-row-group">{renderRows()}</div>;
};

export default BookmarksRowGroup;
