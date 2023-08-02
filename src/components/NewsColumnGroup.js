import React from "react";
import NewsColumn from "./NewsColumn";

const NewsColumnGroup = ({ data }) => {
  const renderColumns = () => {
    const columns = [];
    for (let i = 5; i < 13; i++) {
      columns.push(<NewsColumn props={data.articles[i]}></NewsColumn>);
    }
    return columns;
  };

  return <div id="news-column-group">{renderColumns()}</div>;
};

export default NewsColumnGroup;
