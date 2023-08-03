import { calculateTimeDifference, formatDate } from "../App";

const NewsRow = ({ props }) => {
  const handleTap = () => {
    window.location.href = props.url;
  };

  return (
    <div id="news-row">
      <div id="news-row-image-container">
        <img src={props.urlToImage} alt="Image" id="news-row-image" />
      </div>

      <div id="news-row-column">
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
        <h5 className="title-label" onClick={handleTap}>
          {props.title}
        </h5>
        <p className="date-label">{formatDate(props.publishedAt)}</p>
      </div>
    </div>
  );
};

export default NewsRow;
