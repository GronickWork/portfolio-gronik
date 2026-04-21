import React from 'react';
import './desk-nav.scss';
import { dataNav } from '../../data/data_nav';

const DeskNav = () => {
  return (
    <div className='desk_nav' id='desk_nav'>
      <ul className='nav_desk_ul' id='nav_desk_ul'>
        {dataNav.map((el, index)=> {
          return(<li className='ul_item' key={index}><a href={el.link}>{el.name}</a></li>)
        })}
      </ul>
      
    </div>
  );
}

export default DeskNav;
