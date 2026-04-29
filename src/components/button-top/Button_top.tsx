import React, { useEffect, useRef } from 'react';
import './button_top.scss';

const ButtonTop = () => {
  const btnRef = useRef<HTMLDivElement>(null);
  const handleScroll = ()=> {
    if(btnRef.current) btnRef.current.hidden = (window.scrollY < window.innerHeight / 2);
/*Заменили document.documentElement.clientHeight на window.innerHeight,
  что является более современным и предпочтительным способом получения высоты видимой области окна.*/
  }

  function smoothlyTop(e: any) {
    e.preventDefault();
    const top = document.getElementById('top');
    top?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  
  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    // Убираем слушатель при размонтировании компонента
    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    
  
  return (
    <div
      className='button_top'
      hidden
      ref={btnRef}
      onClick={(e)=> smoothlyTop(e)}
    >
      <a href='#top' className='but_top' style={{backgroundImage: `url(images/svg/arrowTop.svg)`}}> </a>
    </div>
  );
}

export default ButtonTop;

