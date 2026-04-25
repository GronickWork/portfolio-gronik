import React from 'react';
import './services.scss';

const Services = () => {
  return (
    <div className='services'>
      <div className='serv_head'>
        <h2>Услуги</h2>
      </div>
      <div className='serv_content'>
        <p className='serv_content_item'>Адаптивная верстка по макетам из Figma и psd файлам</p>
        <p className='serv_content_item'>Разработка Web-приложений на React, Vue и Laravel или Node.js</p>
      </div>
    </div>
  );
}

export default Services;
