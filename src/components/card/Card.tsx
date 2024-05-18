import React from 'react'

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div className='card'>
      <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Image" />
      <div className='details'>
          <h2>{companyName} ({ticker})</h2>
          <p>${price}</p>
      </div>
      <p className='info'>
          The information
      </p>
  </div>
  );
}

export default Card