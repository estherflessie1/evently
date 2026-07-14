import { createContext, useContext, useEffect, useState } from "react";

const BookmarkContext = createContext();

function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => {
    const savedBookmarks = localStorage.getItem("eventlyBookmarks");
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  // Save bookmarks whenever they change
  useEffect(() => {
    localStorage.setItem(
      "eventlyBookmarks",
      JSON.stringify(bookmarks)
    );
  }, [bookmarks]);

  // Add a bookmark
  const addBookmark = (event) => {
    if (!isBookmarked(event.id)) {
      setBookmarks((prev) => [...prev, event]);
    }
  };

  // Remove a bookmark
  const removeBookmark = (id) => {
    setBookmarks((prev) =>
      prev.filter((event) => event.id !== id)
    );
  };

  // Toggle bookmark
  const toggleBookmark = (event) => {
    if (isBookmarked(event.id)) {
      removeBookmark(event.id);
    } else {
      addBookmark(event);
    }
  };

  // Check if an event is bookmarked
  const isBookmarked = (id) => {
    return bookmarks.some((event) => event.id === id);
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
        toggleBookmark,
        isBookmarked,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

// Custom Hook
export const useBookmark = () => useContext(BookmarkContext);

// Default Export
export default BookmarkProvider;