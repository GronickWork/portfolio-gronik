import React from 'react';
import { DataNav } from '../../data/data_nav';
import './device_nav.scss';

const DeviceNav = () => {
  return (
    <div className='dev_nav' id='dev_nav'>
      <ul className='dev_nav_ul' id='dev_nav_ul'>
        {DataNav}
      </ul> 
    </div>
  );
}

export default DeviceNav;
