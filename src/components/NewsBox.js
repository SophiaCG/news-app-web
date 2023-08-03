import { calculateTimeDifference, formatDate } from "../App";

const NewsBox = ({ props }) => {
  return (
    <div id="news-box">
      <div id="image-container">
        <img src={props.urlToImage} alt="Image" id="news-box-image" />
      </div>
      <div id="text-box">
        <div id="text-box-header">
          <img
            src="./images/bbc-logo.jpg"
            alt="Logo"
            id="news-box-logo-image"
          />
          <h4>{props.source.name}</h4>
          <p className="time-label">
            • {calculateTimeDifference(props.publishedAt)}
          </p>
        </div>
        <h3>{props.title}</h3>
        <p>
          {props.description}
          <button className="read-more-button">Read More</button>
        </p>
        <p className="date-label">{formatDate(props.publishedAt)}</p>
      </div>
    </div>
  );
};

export default NewsBox;
