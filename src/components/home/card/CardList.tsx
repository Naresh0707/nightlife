// CardList.js
import React, { useState } from 'react';
import jsonData from '../../common/data/HomeContent.json';
import Card from './Card';
import CardModel from '../card/CardModule';

const CardList = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const headings = jsonData.headings;

  const handleToggleAccordion = (cardIndex:any) => {
    setExpandedCardIndex((prevIndex) => (prevIndex === cardIndex ? null : cardIndex));
  };

  return (
    <div>
      {headings.map((heading, index) => (
        <div key={index}>
          <h2 className={`text-center ${heading.cards[0]?.color1} font-medium p-3`}>{heading.heading}</h2>
          <div className='shadow'>
            {heading.cards.length > 0 ? (
              heading.cards.map((card, cardIndex) => (
                <React.Fragment key={cardIndex}>
                <Card
                  data={new CardModel(card.title, card.lin, card.phara, card.image, card.color1)}
                  onClick={() => handleToggleAccordion(cardIndex)}
                />
                <div className='bg-gray-200'>
                {cardIndex < heading.cards.length - 1 && <hr className={`h-[2px] w-auto ms-7 me-5 ${card.color2}`} />}

                </div>
              </React.Fragment>
                ))
            ) : (
              <div className='text-center bg-gray-200 pt-11 pb-11'>
                <h3 className={`pb-4`}>No {heading.heading} to display</h3>
                <a href='#' className='text-blue-500 font-lg'>
                  Add your {heading.heading} here
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
