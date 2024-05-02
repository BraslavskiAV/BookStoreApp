import '../Store/Store.css'
import React, { useState, useEffect } from 'react';
import Book from '../Store/Item';
import { IBook } from '../Store/Item';
import Pagination from '../Pagination/Pagination';

interface ISelectedBook extends IBook {
  id: string;
}


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
}

const selectedBooks: ISelectedBook[] = [
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    subtitle: 'A novel',
    authors: ['Harper Lee'],
    publisher: 'J.B. Lippincott & Co.',
    published: '1960-07-11',
    description: 'To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.',
    website: 'https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51r77IHbJpL._SX321_BO1,204,203,200_.jpg',
    error: null,
    year: 1960,
    price: 8.99,
    url: 'https://amzn.to/3pQAOjg',
    pdf: {'0':'https://example.com/to-kill-a-mockingbird.pdf'}
  },
  {
    id: '3',
    title: '1984',
    subtitle: 'A novel',
    authors: ['George Orwell'],
    publisher: 'Secker & Warburg',
    published: '1949-06-08',
    description: 'Nineteen Eighty-Four is a dystopian novel by English writer George Orwell. It was published in 1949 by Secker & Warburg as Orwell\'s ninth and final book completed in his lifetime.',
    website: 'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51M3HMJ9P4L._SX327_BO1,204,203,200_.jpg',
    error: null,
    year: 1949,
    price: 9.99,
    url: 'https://amzn.to/3pQzWgj',
    pdf: {'1':'https://example.com/1984.pdf'}
  },
  {
    id: '4',
    title: 'Brave New World',
    subtitle: 'A novel',
    authors: ['Aldous Huxley'],
    publisher: 'Chatto & Windus',
    published: '1932-01-01',
    description: 'Brave New World is a dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Set in London in the year AD 2540 (632 A.F. in the book), the novel anticipates developments in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that combine to profoundly change society.',
    website: 'https://en.wikipedia.org/wiki/Brave_New_World',
    image: 'https://images-na.ssl-images-amazon.com/images/I/518gZ9L8e9L._SX326_BO1,204,203,200_.jpg',
    error: null,
    year: 1932,
    price: 10.99,
    url: 'https://amzn.to/3pR5xjq',
    pdf: {'2':'https://example.com/brave-new-world.pdf'}
  },
  {
    id: '5',
    title: 'The Great Gatsby',
    subtitle: 'A novel',
    authors: ['F. Scott Fitzgerald'],
    publisher: 'Charles Scribner\'s Sons',
    published: '1925-04-10',
    description: 'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922.',
    website: 'https://en.wikipedia.org/wiki/The_Great_Gatsby',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51r6D346b7L._SX325_BO1,204,203,200_.jpg',
    error: null,
    year: 1925,
    price: 11.99,
    url: 'https://amzn.to/3pR6sjM',
    pdf: {'3':'https://example.com/the-great-gatsby.pdf'}
  }
];



function Favorites() {
  const [selectedBooksList, setSelectedBooksList] = useState<ISelectedBook[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const startIndex = (page - 1) * 12;
    const endIndex = startIndex + 12;
    const fetchedSelectedBooks: ISelectedBook[] = selectedBooks.slice(startIndex, endIndex);
    setSelectedBooksList(fetchedSelectedBooks);
  }, [page]);

  return (
    <>
      <div className="store__container">
        <p className="store__title">Favorite Books</p>
        <div className='book__list'>
          {selectedBooksList.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Favorites;
