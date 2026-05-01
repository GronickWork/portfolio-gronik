import React from 'react';
import './desk-nav.scss';
import { dataNav } from '../../data/data_nav';

const DeskNav = () => {
  function smoothScroll(e: any) {
    e.preventDefault();
    const scrollGoal = document.getElementById(e.target.dataset.goal);
    scrollGoal?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  return (
    <div className='desk_nav'>
      <ul className='nav_desk_ul'>
        {dataNav.map((el, index)=> {
          const goal = `#${el.link}`;
          return(<li className='ul_item' key={index} onClick={(e)=> smoothScroll(e)}><a href={goal} data-goal={el.link}>{el.name}</a></li>)
        })}
      </ul>
      
    </div>
  );
}

export default DeskNav;
