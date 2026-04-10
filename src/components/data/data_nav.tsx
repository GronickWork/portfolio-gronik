const dataNav = [
  {
    link: '#port',
    name: 'Портфолио'
  },
  {
    link: '#serv',
    name: 'Услуги'
  },
  {
    link: '#rev',
    name: 'Отзывы'
  },
 {
    link: '#sert',
    name: 'Сертификаты'
  },
  {
    link: '#footer',
    name: 'Контакты'
  }, 
];

export const DataNav  = dataNav.map((el, index) => {return(<li className='ul_item' key={index}><a href={el.link}>{el.name}</a></li>)})