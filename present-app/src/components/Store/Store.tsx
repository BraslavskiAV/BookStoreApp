import '../Store/Store.css'
import Book from './Item';

// interface BookProps {
//   books: Book[];
// }



function Store() {
  return (  
    <>
    <div className="store__container">
      <p className="store__title">New Releases Books</p>
      <div className='book-list'>
        <Book/>
      {/* {books.map(book => (
        <Book key={book.title} book={book} />
      ))} */}
      </div>
    </div>
    </>
  );
}

export default Store;