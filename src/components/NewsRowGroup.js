import React from "react";
import NewsRow from "./NewsRow";

const NewsRowGroup = ({ data }) => {
  const renderRows = () => {
    const rows = [];
    for (let i = 1; i < 4; i++) {
      rows.push(<NewsRow props={data.articles[i]}></NewsRow>);
    }
    return rows;
  };

  return <div>{renderRows()}</div>;
};

export default NewsRowGroup;
