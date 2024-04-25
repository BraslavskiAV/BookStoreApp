import '../src/components/Pagination/Pagination.css'
import '../src/components/Header/Header.css'
import '../src/components/Footer/Footer.css'
import '../src/components/Cards/Card.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import './App.css';
import BookCard from './pages/BookCard';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/bookcard' element={<BookCard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
