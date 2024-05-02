import React from 'react';
import './Book.css';

interface ISelectedBook {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  published: string;
  description: string;
  website: string;
  image: string;
  year: number;
  price: number;
  url: any;
  pdf: any;
}

interface IBookProps {
  book: ISelectedBook;
}

const Book: React.FC<IBookProps> = ({ book }) => {
  return (
    <div className="book">
      <img className="book__image" src={book.image} alt={book.title} />
      <div className="book__info">
        <h2 className="book__title">{book.title}</h2>
        <h3 className="book__subtitle">{book.subtitle}</h3>
        <div className="book__authors">
          {book.authors.map((author, index) => (
            <span key={index} className="book__author">{author}</span>
          ))}
        </div>
        <div className="book__publisher">{book.publisher}</div>
        <div className="book__published">{book.published}</div>
        <div className="book__description">{book.description}</div>
        <div className="book__website">
          <a href={book.website} target="_blank" rel="noopener noreferrer">
            {book.website}
          </a>
        </div>
        <div className="book__year">{book.year}</div>
        <div className="book__price">{book.price}</div>
        <div className="book__url">
          <a href={book.url} target="_blank" rel="noopener noreferrer">
            {book.url}
          </a>
        </div>
        <div className="book__pdf">
          <a href={book.pdf} target="_blank" rel="noopener noreferrer">
            {book.pdf}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Book;
