import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const Bookmark = ({}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
  };

  return (
    <div>
      {isBookmarked ? (
        <FaBookmark className="icon" onClick={toggleBookmark} />
      ) : (
        <FaRegBookmark className="icon" color="gray" onClick={toggleBookmark} />
      )}
    </div>
  );
};

export default Bookmark;
