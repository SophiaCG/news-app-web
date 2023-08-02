const NewsBox = () => {
  return (
    <div id="news-box">
      <div id="image-container">
        <img
          src="https://media.npr.org/assets/img/2023/07/31/ap23185195625465_wide-a191c3fbbd660bfba5bdfdddd9b5d58a06b436a3-s1400-c100.jpg"
          alt="Image"
          id="news-box-image"
        />
      </div>
      <div id="text-box">
        <div id="text-box-header">
          <img
            src="./images/bbc-logo.jpg"
            alt="Logo"
            id="news-box-logo-image"
          />
          <h2>BBC News</h2>
          <p>• 10 min. ago</p>
        </div>
        <h1>
          People spend night on roofs and in trees after Ukraine dam breach
        </h1>
        <p>
          People spend night on roofs and in trees after Ukraine dam breach.
          People spend night on roofs and in trees after Ukraine dam breach.
          People spend night on roofs and in trees after Ukraine dam breach.
          <button className="read-more-button">Read More</button>
        </p>
        <p className="date-label">August 1, 2023</p>
      </div>
    </div>
  );
};

export default NewsBox;
