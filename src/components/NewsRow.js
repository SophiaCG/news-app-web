import { calculateTimeDifference, formatDate } from "../App";
import Bookmark from "./Bookmark";

const NewsRow = ({ props }) => {
  const handleTap = () => {
    window.location.href = props.url;
  };

  return (
    <div id="news-row">
      <div id="news-row-image-container">
        {/* Show the image if available, otherwise render a placeholder or any other content */}
        {props.urlToImage != null ? (
          <img
            src={props.urlToImage}
            alt="Image"
            id="news-row-image"
            onClick={handleTap}
          />
        ) : (
          <div className="no-image-placeholder">No Image Available</div>
          // You can also render nothing here, or any other content as needed
        )}
      </div>
      <div id="news-row-column">
        <div id="header-bookmark-container">
          <div id="text-box-header">
            <img
              src="./images/bbc-logo.jpg"
              alt="Logo"
              id="news-row-logo-image"
              onClick={handleTap}
            />
            <h5>{props.source.name}</h5>
            <p className="time-label">
              • {calculateTimeDifference(props.publishedAt)}
            </p>
          </div>
          <Bookmark props={props}></Bookmark>
        </div>
        <h5 className="title-label" onClick={handleTap}>
          {props.title}
        </h5>
        <p className="date-label">{formatDate(props.publishedAt)}</p>
      </div>
    </div>
  );
};

export default NewsRow;
