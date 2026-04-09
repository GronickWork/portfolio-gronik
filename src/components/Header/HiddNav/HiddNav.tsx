import React from 'react';
import './hidd_nav.scss';
import { dataNav } from '../../data/data_nav';

const HiddNav = () => {
  return (
    <div className='hiddN' id='hiddN'>
      <ul className='nav_ul' id='navUl'>
        {dataNav.map((el) => {
          return(
            <li className='ul_item'><a href={el.link}>{el.name}</a></li>
          )
        })}
      </ul>
      
    </div>
  );
}

export default HiddNav;
