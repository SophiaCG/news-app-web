import { calculateTimeDifference, formatDate } from "../App";
import Bookmark from "./Bookmark";

const NewsColumn = ({ props }) => {
  const handleTap = () => {
    window.location.href = props.url;
  };

  return (
    <div id="news-column">
      <div id="news-column-image-container">
        {/* Show the image if available, otherwise render a placeholder or any other content */}
        {props.urlToImage != null ? (
          <img
            src={props.urlToImage}
            alt="Image"
            id="news-column-image"
            onClick={handleTap}
          />
        ) : (
          <div className="no-image-placeholder">No Image Available</div>
          // You can also render nothing here, or any other content as needed
        )}
      </div>

      <div id="header-bookmark-container">
        <div id="text-box-header">
          <img
            src="./images/bbc-logo.jpg"
            alt="Logo"
            id="news-row-logo-image"
          />
          <h5>{props.source.name}</h5>
          <p className="time-label">
            • {calculateTimeDifference(props.publishedAt)}
          </p>
        </div>
        <Bookmark></Bookmark>
      </div>
      <h4 className="title-label" onClick={handleTap}>
        {props.title}
      </h4>
      <p>
        {props.description}
        <button className="read-more-button" onClick={handleTap}>
          Read More
        </button>
      </p>
      <p className="date-label">{formatDate(props.publishedAt)}</p>
    </div>
  );
};

export default NewsColumn;
