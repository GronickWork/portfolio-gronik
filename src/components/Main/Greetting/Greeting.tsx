import React from 'react';
import './greeting.scss';

const Greeting = () => {
  return (
    <div className='greeting'>
      <div className='greet_photo'><img src='images/works/myf.png' alt='Моё фото'></img></div>
      <div className='greet_content'>
        <h2>Выполняю:</h2>
        <h3> - адаптивную верстку сайтов по макетам из Figma и Photopea</h3>
        <h3> - разработку web-приложений на React, Laravel и Node.js</h3>
        <p></p>
        <p>Здравствуйте! Меня зовут Олег Гречишников. Я разработчик Web-приложений из Нижнего Новгорода.
            Моя специализация: разработка сайтов и Web-приложений.</p>
        <p><a href="mailto:golegni@yandex.ru">golegni@yandex.ru</a></p>
      </div>
    </div>
  );
}

export default Greeting;
