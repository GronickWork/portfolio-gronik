import React from 'react';
import './main.scss';
import Greeting from './Greetting/Greeting';
import Line from '../Line/Line';
import Portfolio from './Portfolio/Porfolio';
import Services from './Services/Services';
import Reviews from './reviews/Reviews';
import Sertificates from './sertificates/Sertificates';

const Main = () => {
  return (
    <div className='main'>
      <Greeting/>
      <Line idl="port"/>
      <Portfolio/>
      <Line idl='serv'/>
      <Services/>
      <Line idl='rev'/>
      <Reviews/>
      <Line idl='sert'/>
      <Sertificates/>
    </div>
  );
}

export default Main;
