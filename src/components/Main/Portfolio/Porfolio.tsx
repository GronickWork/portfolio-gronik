import React from 'react';
import { PortfolioList } from '../../data/portfolio-list';
import './portfolio.scss';

const Portfolio = () => {
  function showWorks(e: any) {
    const portUl = e.target.closest('.port_label');
    const names = portUl.querySelectorAll('li[data-name]');
    for (let name of names) {
      const idEl = name.getAttribute('data-name');
      const el = document.getElementById(idEl);
      if (el?.hasAttribute('hidden')) {
        el.removeAttribute('hidden');
      } else {
        el?.setAttribute('hidden', 'hidden');
      }
       e.target.innerHTML = e.target.innerHTML ==='Все проекты'? 'Скрыть': 'Все проекты';
    }
  }
  return (
    <div className='portpholio'>
      <h2 className='port_head'>Портфолио</h2>
      <ul className='port_label' id='portUl'>
        {PortfolioList.map((el, index) => {
          const hidd = index > 2;
          return(<li className='label_item' id={hidd? el.name: undefined} data-name={hidd? el.name: undefined} hidden={hidd}>
              <a href={el.link} target='blank'><img src={el.img} alt={el.alt}/></a>
            </li>);
        })}
        <button className='portfo_butt' id='portbut' onClick={(e)=>showWorks(e)}>Все проекты</button>
      </ul>
    </div>
  );
}

export default Portfolio;
