import React from 'react';
import './footer.scss';
import Messages from './messages/Messages';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <h2 className='footer_mail'><a href='mailto:golegni@yandex.ru'>golegni@yandex.ru</a></h2>
      <Messages/>
      <h4 className='dizaine'>Дизайнер сайта: <a href="https://www.behance.net/buyanova" target="_blank" rel="noreferrer">Evgeniya Buyanova</a></h4>
    </div>
  );
}

export default Footer;
