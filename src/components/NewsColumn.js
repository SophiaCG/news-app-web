const NewsColumn = ({ props }) => {
  return (
    <div id="news-column">
      <div id="news-column-image-container">
        <img src={props.urlToImage} alt="Image" id="news-column-image" />
      </div>

      <div id="text-box-header">
        <img src="./images/bbc-logo.jpg" alt="Logo" id="news-row-logo-image" />
        <h4>{props.source.name}</h4>
        <p>• 10 min. ago</p>
      </div>
      <h4>{props.title}</h4>
      <p>
        {props.description}
        <button className="read-more-button">Read More</button>
      </p>
      <p className="date-label">August 1, 2023</p>
    </div>
  );
};

export default NewsColumn;
