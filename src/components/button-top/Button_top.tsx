import React, { useEffect } from 'react';
import './button_top.scss';

const ButtonTop = () => {
   useEffect(()=> {
      window.addEventListener('scroll', handleScroll);
      // Убираем слушатель при размонтировании компонента
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    function handleScroll(e: any) {
        const btn = e.target;
        if(btn) btn.hidden = (window.scrollY < window.innerHeight / 2);
        /*Заменили document.documentElement.clientHeight на window.innerHeight,
          что является более современным и предпочтительным способом получения высоты видимой области окна.*/
      }
  
  return (
    <div className='button_top' hidden onClick={(e)=> handleScroll(e)}>
      <a href='#top' className='but_top' style={{backgroundImage: `url(images/svg/arrowTop.svg)`}}> </a>
    </div>
  );
}

export default ButtonTop;
