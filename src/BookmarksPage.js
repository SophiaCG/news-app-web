import React, { useState, useEffect } from "react";
import BookmarksRowGroup from "./components/BookmarksRowGroup";
import axios from "axios";

const BookmarksPage = () => {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (books.length == 0) {
    return (
      <div>
        <h1 id="news-header">Bookmarks</h1>
        <h5> No bookmarks saved.</h5>
      </div>
    );
  }

  return (
    <div>
      <h1 id="news-header">Bookmarks</h1>
      <BookmarksRowGroup data={books}></BookmarksRowGroup>
    </div>
  );
};

export default BookmarksPage;
