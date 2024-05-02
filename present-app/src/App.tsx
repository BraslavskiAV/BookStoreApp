import '../src/components/Pagination/Pagination.css'
import '../src/components/Header/Header.css'
import '../src/components/Footer/Footer.css'
import '../src/components/Cards/Card.css'
import '../src/components/SignIn/Signin.css'
import '../src/components/Signup/SignUp.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import './App.css';
import BookCard from './pages/BookCard';
import SignPage from './pages/SignPage';
import SignUpPage from './pages/SignUpPage'
import FavoritesPage from './pages/Favorites'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/bookcard' element={<BookCard/>}/>
      <Route path='/signin' element={<SignPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/favorites' element={<FavoritesPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
