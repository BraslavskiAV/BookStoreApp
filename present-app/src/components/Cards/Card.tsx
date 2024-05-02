import React, { useState, useEffect } from 'react';
import rating from '../../assets/Frame 1561.svg';


export interface ICard {
  error: string;
  title: string;
  year: string;
  price: string;
  image: string;
  url: string;
  authors:string;
  pdf: {
    [key: string]: string;
  };
}

function Card() {
  const [card, setCard] = useState<ICard | null>(null);

  useEffect(() => {
    fetch('https://api.itbook.store/1.0/new')
      .then(response => response.json())
      .then(data => setCard(data.books[1]))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div className='card__container'>
        {card && (
          <>
          <p className='card__title'>{card.title}</p>
          <div className='card'>
            <div className='card__image'>
              <img src={card.image} alt={card.title} className='image' />
            </div>
            <div className='card__info'>
              <div className='price__block pr'>
                <p className='card__price'>{card.price}</p>
                <img src={rating} alt='rating'></img>
              </div>
              <p className='about__card'>Authors{card.authors}</p>
              <p className='about__card'>Publisher</p>
              <p className='about__card'>Language</p>
              <p className='about__card'>Format</p>
              <button className='add__card'>Add to card</button>
            </div>
          </div>
          <div className='card__description'>
            <div className='tabs'>
              <button className='descrip tab'>Description</button>
              <button className='authors tab'>Authors</button>
              <button className='reviews tab'>Reviews</button>
            </div>
            <p className='subtitle__card'>Finally, tackle an ROS hands-on project to apply all the concepts of ROS you've learned. The aim of the project is to perform a dead-reckoning using a cheap mobile robot. You can command your robot's position on Rviz and your robot will move to that position! Not only will you learn to program, you'll gain hands-on experience working with hardware to create a real robot.</p>
          </div>
          </>
        )}
      </div>
    </>
  );
}

export default Card;
