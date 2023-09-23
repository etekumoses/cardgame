import React from 'react';

function Card({ value, isCorrect, onClick }) {
  return (
    <div
      className={`card ${isCorrect ? 'bg-blue-500' : 'bg-gray-300'} text-black rounded-md p-4 text-lg cursor-pointer`}
      onClick={!isCorrect ? onClick : undefined}
    >
      {isCorrect ? value : 'Click to Flip'}
    </div>
  );
}

export default Card;
