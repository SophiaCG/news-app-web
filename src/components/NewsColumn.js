import { calculateTimeDifference, formatDate } from "../App";

const NewsColumn = ({ props }) => {
  const handleTap = () => {
    window.location.href = props.url;
  };

  return (
    <div id="news-column">
      <div id="news-column-image-container">
        <img
          src={props.urlToImage}
          alt="Image"
          id="news-column-image"
          onClick={handleTap}
        />
      </div>

      <div id="text-box-header">
        <img src="./images/bbc-logo.jpg" alt="Logo" id="news-row-logo-image" />
        <h5>{props.source.name}</h5>
        <p className="time-label">
          • {calculateTimeDifference(props.publishedAt)}
        </p>
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
