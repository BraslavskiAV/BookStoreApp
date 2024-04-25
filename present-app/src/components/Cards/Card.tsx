import React, { useState, useEffect } from 'react';
import rating from '../../assets/Frame 1561.svg';


interface Card {
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

function Card() {
  const [card, setCard] = useState<Card | null>(null);

  useEffect(() => {
    fetch('https://api.itbook.store/1.0/new')
      .then(response => response.json())
      .then(data => setCard(data.books[0]))
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
              <div className='price__block'>
                <p className='item__price'>{card.price}</p>
                <img src={rating} alt='rating'></img>
              </div>
            </div>
          </div>
          </>
        )}
      </div>
    </>
  );
}

export default Card;
