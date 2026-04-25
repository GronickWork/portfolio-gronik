import React from 'react';
import './reviews.scss';

const Reviews = () => {
  return (
    <div className='reviews'>
      <h2 className='rev_head'>Отзывы заказчиков</h2>
      <ul className='port_label'>
        <li className='rev_content_item'><img src='images/reviews/cleanEnv.png' alt='отзыв1'  data-size="sm"></img></li>
      </ul>
    </div>
  );
}

export default Reviews;
