import React from 'react';
import { messFooter } from '../../data/mess-for-footer';
import './messages.scss';


const Messages = () => {
  return (
    <ul className='footer_ul'>
     {messFooter.map((el, index)=> {
      return(
      <li key={index} className='footer_ul_item'>
        <a href={el.link} className='foot_link' style={{backgroundImage: `url(${el.imgLink})`}}>
          <span className='foot_link_text'>{el.text}</span>
        </a>
      </li>)
     })}
    </ul>
  );
}

export default Messages;