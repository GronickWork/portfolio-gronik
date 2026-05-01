import React from 'react';
import { dataNav } from '../../data/data_nav';
import './device_nav.scss';

const DeviceNav = () => {
  function hideNav(e: any) {
    e.preventDefault();
    const devNav = document.getElementById('dev_nav');
    if(!devNav) {return;}
    if (getComputedStyle(devNav).display === 'none') {devNav.style.display = 'block'} else {devNav.style.display = 'none'}
    const scrollGoal = document.getElementById(e.target.dataset.goal);
    scrollGoal?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  return (
    <div className='dev_nav' id='dev_nav'>
      <ul className='dev_nav_ul'>
        {dataNav.map((el, index)=> {
          const goal = `#${el.link}`;
          return(<li className='ul_item' key={index} onClick={(e)=> hideNav(e)}><a href={goal} data-goal={el.link}>{el.name}</a></li>)
        })}
      </ul> 
    </div>
  );
}

export default DeviceNav;
