import Search from '../../assets/Icon-Search.svg'
import Liked from '../../assets/Vector.svg'
import User from '../../assets/user.svg'
import { Link } from "react-router-dom";

function Header() {
  return (  
    <>
    <div className='header'>
        <div className="header-container">
          <Link className='burger_link' to={'/'}>
            <button className="header__menu">BOOKSTORE</button> 
          </Link>
          <div className="search__input">
            <input className='input' placeholder='Search'></input>
            <img src={Search} alt='search'></img>
          </div>
          <div className='right-block'>
            <button className="liked">
              <img src={Liked} alt='liked'></img>
            </button>
            <button className="myfav">
              <img src={User} alt='user'></img>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;