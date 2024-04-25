import { Link } from 'react-router-dom';
import rating from '../../assets/Frame 1561.svg';
import React, { useState, useEffect } from 'react';

interface Book {
  error: string;
  title: string;
  year: string;
  price: string;
  image: string;
  url: string;
  pdf: {
    [key: string]: string;
  };
}

function Book() {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    fetch('https://api.itbook.store/1.0/new')
      .then(response => response.json())
      .then(data => setBook(data.books[0]))
      .catch(error => console.error(error));
  }, []);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className='items'>
      <div className='item__image'>
        <img src={book.image} alt={book.title} className='image' />
      </div>
      <Link to={'/bookcard'} className='item__title-link'>
      <h2 className='item__title'>{book.title}</h2>
      </Link>
      <p className='item__year'>Year: 2018</p>
      <div className='price__block'>
        <p className='item__price'>{book.price}</p>
        <img src={rating} alt='rating'></img>
      </div>
      {book.pdf && (
        <ul>
          {Object.entries(book.pdf).map(([chapter, url]) => (
            <li key={chapter}>
              <a href={url}>{chapter}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
}

export default Book;
