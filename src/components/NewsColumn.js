const NewsColumn = () => {
  return (
    <div id="news-column">
      <div id="news-column-image-container">
        <img
          src="https://media.npr.org/assets/img/2023/07/31/ap23185195625465_wide-a191c3fbbd660bfba5bdfdddd9b5d58a06b436a3-s1400-c100.jpg"
          alt="Image"
          id="news-column-image"
        />
      </div>

      <div id="text-box-header">
        <img src="./images/bbc-logo.jpg" alt="Logo" id="news-row-logo-image" />
        <h4>BBC News</h4>
        <p>• 10 min. ago</p>
      </div>
      <h4>People spend night on roofs and in trees after Ukraine dam breach</h4>
      <p>
        People spend night on roofs and in trees after Ukraine dam breach.
        People spend night on roofs and in trees after Ukraine dam breach.
      </p>
      <p className="date-label">August 1, 2023</p>
    </div>
  );
};

export default NewsColumn;