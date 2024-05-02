import '../Store/Store.css'
import React, { useState, useEffect } from 'react';
import Book from './Item';
import { IBook } from './Item';
import Pagination from '../Pagination/Pagination';

const booksApiUrl = 'https://api.itbook.store/1.0/new';

function Store() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(booksApiUrl);
      const data = await response.json();
      const startIndex = (page - 1) * 12;
      const endIndex = startIndex + 12;
      const fetchedBooks: IBook[] = data.books.slice(startIndex, endIndex);
      setBooks(fetchedBooks);
    };

    fetchBooks();
  }, [page]);

  // const handlePrevPage = () => {
  //   setPage(page - 1);
  // };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const isPrevDisabled = page === 1;
  const isNextDisabled = page === Math.ceil(books.length / 12);

  return (
    <>
      <div className="store__container">
        <p className="store__title">New Releases Books</p>
        <div className='book__list'>
          {books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
        <Pagination
          clickFuncPagin={handleNextPage}
          isDisabled={isNextDisabled}
          page={page}
          anyPage={Math.ceil(books.length / 12)}
        />
      </div>
    </>
  );
}

export default Store;
