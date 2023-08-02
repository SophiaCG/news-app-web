const NewsRow = () => {
  return (
    <div id="news-row">
      <div id="news-row-image-container">
        <img
          src="https://media.npr.org/assets/img/2023/07/31/ap23185195625465_wide-a191c3fbbd660bfba5bdfdddd9b5d58a06b436a3-s1400-c100.jpg"
          alt="Image"
          id="news-row-image"
        />
      </div>

      <div id="news-row-column">
        <div id="text-box-header">
          <img
            src="./images/bbc-logo.jpg"
            alt="Logo"
            id="news-row-logo-image"
          />
          <h3>BBC News</h3>
          <p>• 10 min. ago</p>
        </div>
        <h5>
          People spend night on roofs and in trees after Ukraine dam breach
        </h5>
        <p className="date-label">August 1, 2023</p>
      </div>
    </div>
  );
};

export default NewsRow;
