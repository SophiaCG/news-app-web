import { calculateTimeDifference, formatDate } from "../App";
import Bookmark from "./Bookmark";

const NewsBox = ({ props }) => {
  const handleTap = () => {
    window.location.href = props.url;
  };

  return (
    <div id="news-box">
      <div id="image-container">
        {/* Show the image if available, otherwise render a placeholder or any other content */}
        {props.urlToImage != null ? (
          <img
            src={props.urlToImage}
            alt="Image"
            id="news-box-image"
            onClick={handleTap}
          />
        ) : (
          <div className="no-image-placeholder">No Image Available</div>
          // You can also render nothing here, or any other content as needed
        )}
      </div>
      <div id="text-box">
        <div id="header-bookmark-container">
          <div id="text-box-header">
            <img
              src="./images/bbc-logo.jpg"
              alt="Logo"
              id="news-box-logo-image"
            />
            <h4>{props.source != null ? props.source.name : ""}</h4>
            <p className="time-label">
              • {calculateTimeDifference(props.publishedAt)}
            </p>
          </div>
          <Bookmark props={props}></Bookmark>
        </div>
        <h3 className="title-label" onClick={handleTap}>
          {props.title}
        </h3>
        <p>
          {props.description}
          <button className="read-more-button" onClick={handleTap}>
            Read More
          </button>
        </p>
        <p className="date-label">{formatDate(props.publishedAt)}</p>
      </div>
    </div>
  );
};

export default NewsBox;
