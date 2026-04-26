import React from 'react';
import './reviews.scss';

const Reviews = () => {
  function changeSize(e: any) {
    const clickEl = e.target;
    if(clickEl.dataset.size === 'sm') {
      clickEl.dataset.size = 'lg';
      clickEl.style.width = '70%';
    } else {
      clickEl.dataset.size = 'sm';
      clickEl.style.width = '';
    }
  }
  return (
    <div className='reviews'>
      <h2 className='rev_head'>Отзывы заказчиков</h2>
      <ul className='port_label'>
        <li className='rev_content_item' onClick={(e)=> changeSize(e)}><img src='images/reviews/cleanEnv.png' alt='отзыв1'  data-size="sm"></img></li>
      </ul>
    </div>
  );
}

export default Reviews;
