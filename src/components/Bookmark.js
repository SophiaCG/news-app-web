import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import axios from "axios";

const Bookmark = ({ props }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
  };

  const addBookmark = async () => {
    console.log(`TITLE: ${props.title}`);
    try {
      // Create the object you want to add to the database
      const article = {
        title: props.title,
        author: props.author,
        desc: props.description,
        url: props.url,
        image: props.urlToImage,
        publishedAt: props.publishedAt,
        content: props.content,
        sourceName: props.source.name,
      };

      // Make a POST request to your backend API to add the object
      const response = await axios.post(
        "http://localhost:8800/bookmarks",
        article
      );

      // Handle the response or perform any additional actions
      console.log("Object added successfully:", response.data);
    } catch (error) {
      console.error("Error adding object:", error);
    }
    setIsBookmarked(true);
  };

  const removeBookmark = async () => {
    try {
      await axios.delete(`http://localhost:8800/bookmarks/${props.title}`);
      setIsBookmarked(false);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {isBookmarked ? (
        <FaBookmark className="icon" onClick={removeBookmark} />
      ) : (
        <FaRegBookmark className="icon" color="gray" onClick={addBookmark} />
      )}
    </div>
  );
};

export default Bookmark;
