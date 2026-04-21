import React from 'react';
import { dataNav } from '../../data/data_nav';
import './device_nav.scss';

const DeviceNav = () => {
  function hideNav() {
    const devNav = document.getElementById('dev_nav');
    if(!devNav) {return;}
    if (getComputedStyle(devNav).display === 'none') {devNav.style.display = 'block'} else {devNav.style.display = 'none'}
  }
  return (
    <div className='dev_nav' id='dev_nav'>
      <ul className='dev_nav_ul' id='dev_nav_ul'>
        {dataNav.map((el, index)=> {
          return(<li className='ul_item' key={index} onClick={hideNav}><a href={el.link}>{el.name}</a></li>)
        })}
      </ul> 
    </div>
  );
}

export default DeviceNav;
