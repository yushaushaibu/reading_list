import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList({ books, onEdit, onDelete }) {
  const num = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
    );
  });

  return (
    <div className="book-list">
      {num}
      {renderedBooks}
    </div>
  );
}

export default BookList;
