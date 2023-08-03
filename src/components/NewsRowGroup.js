import React from "react";
import NewsRow from "./NewsRow";

const NewsRowGroup = ({ data }) => {
  const renderRows = () => {
    const rows = [];
    for (let i = 1; i < 5; i++) {
      rows.push(<NewsRow props={data.articles[i]}></NewsRow>);
    }
    return rows;
  };

  return <div id="news-row-group">{renderRows()}</div>;
};

export default NewsRowGroup;
