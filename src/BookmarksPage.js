import React, { useState, useEffect } from "react";
import BookmarksRowGroup from "./components/BookmarksRowGroup";
import axios from "axios";

const BookmarksPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/bookmarks");
        setBooks(res.data);
        setLoading(false);
      } catch (err) {
        console.log(`ERROR: ${err.toString()}`);
      }
    };
    fetchAllBooks();
  }, []);

  // console.log(`NEWS: ${books}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!books) {
    return <div>No articles found.</div>;
  }

  return (
    <div>
      <BookmarksRowGroup data={books}></BookmarksRowGroup>
    </div>
  );
};

export default BookmarksPage;
