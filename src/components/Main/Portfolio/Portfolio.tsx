import React from 'react';
import { PortfolioList } from '../../data/portfolio-list';

const Portfolio = () => {
  return (
    <div className='portpholio'>
      <h2 className='port_head'>Портфолио</h2>
      <ul className='port_label' id='portUl'>
        {PortfolioList.map((el, index) => {
          const hidd = index > 2;
          return(<li className='label_item' hidden={hidd}><a href={el.link} target='blank'><img src={el.img} alt={el.alt}/></a></li>)
        })}
      </ul>
    </div>
  );
}

export default Portfolio;
