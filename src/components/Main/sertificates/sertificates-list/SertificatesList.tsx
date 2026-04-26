import React from 'react';
import { TList } from '../../../intefaces/sert-list';
import './sertificat-list.scss';

 
const SertificatesList = ({header, list}: {header: string, list: TList[]}) => {
  function showSertificat(e: any) {
    const placeShow = document.getElementById('showS');
    const placeSert = document.getElementById('shwSertP');
    if(placeSert) placeSert.style.backgroundImage = `url(${e.target.dataset.link})`;
    if(placeShow) placeShow.style.display = 'block';
  }
  return (
    <div className='sr-style'>
      <h3 className='sr-style_head'>{header}</h3>
      <div className='sr-style_content'>
        {list.map((el, index)=> {
          return(<p key={index} id={el.id} data-link={el.link} onClick={(e)=> showSertificat(e)}>{el.text}</p>)
        })}
        <hr className='hr'/>
      </div>
    </div>
  );
}

export default SertificatesList;
