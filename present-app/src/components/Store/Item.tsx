import { Link } from 'react-router-dom';
import rating from '../../assets/Frame 1561.svg';
import React, { useState, useEffect } from 'react';

export interface IBook {
  error?: string | any;
  title: string;
  year: string | number;
  price: string | number;
  image: string;
  url: string;
  pdf?: {
    [key: string]: string;
  };
}

interface IBookProps {
  book: IBook;
}

function Book({ book }: IBookProps) {
  const [bookinfo, setBook] = useState<IBook | null>(null);

  useEffect(() => {
    fetch('https://api.itbook.store/1.0/new')
      .then(response => response.json())
      .then(data => setBook(data.books[0]))
      .catch(error => console.error(error));
  }, []);

  if (!bookinfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className='items'>
      <div className='item__image'>
        <img src={bookinfo.image} alt={bookinfo.title} className='image' />
      </div>
      <Link to={'/bookcard'} style={{ color: 'inherit', cursor: 'pointer', textDecoration: 'none' }}>
      <h2 className='item__title'>{bookinfo.title}</h2>
      </Link>
      <p className='item__year'>Year: 2018</p>
      <div className='price__block'>
        <p className='item__price'>{bookinfo.price}</p>
        <img src={rating} alt='rating'></img>
      </div>
      {bookinfo.pdf && (
        <ul>
          {Object.entries(bookinfo.pdf).map(([chapter, url]) => (
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
