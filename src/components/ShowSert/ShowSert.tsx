import React from 'react';
import './show_sert.scss';

const ShowSert = () => {
  function hiddSert(e: any) {
    const placeS = e.target.closest('.show_sertificate');
    if(getComputedStyle(placeS).display === 'block') {placeS.style.display = 'none';}
  }
  return (
    <div className='show_sertificate' id='showS'>
      <div className='hidd_sert' id='hiddButt' onClick={(e)=> hiddSert(e)}>X</div>
      <div className='place_show_sert' id='shwSertP'></div>
    </div>
  );
}

export default ShowSert;
