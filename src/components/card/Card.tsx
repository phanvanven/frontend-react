import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return <div className='card'>
    <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Image" />
    <div className='details'>
        <h2>APPL</h2>
        <p>$110</p>
    </div>
    <p className='info'>
        The information
    </p>
  </div>
}

export default Card