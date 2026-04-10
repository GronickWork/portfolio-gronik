import React from 'react';
import './desk-nav.scss';
import { DataNav } from '../../data/data_nav';

const DeskNav = () => {
  return (
    <div className='desk_nav' id='desk_nav'>
      <ul className='nav_desk_ul' id='nav_desk_ul'>
        {DataNav}
      </ul>
      
    </div>
  );
}

export default DeskNav;
