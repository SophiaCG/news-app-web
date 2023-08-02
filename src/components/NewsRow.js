const NewsRow = ({ props }) => {
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
          />
          <h5>{props.source.name}</h5>
          <p>• 10 min. ago</p>
        </div>
        <h5>{props.title}</h5>
        <p className="date-label">August 1, 2023</p>
      </div>
    </div>
  );
};

export default NewsRow;
