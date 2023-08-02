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
          <p>• 10 min. ago</p>
        </div>
        <h3>{props.title}</h3>
        <p>
          {props.description}
          <button className="read-more-button">Read More</button>
        </p>
        <p className="date-label">August 1, 2023</p>
      </div>
    </div>
  );
};

export default NewsBox;
