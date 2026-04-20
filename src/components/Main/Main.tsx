import React from 'react';
import './main.scss';
import Greeting from './Greetting/Greeting';
import Line from '../Line/Line';
import Portfolio from './Portfolio/Porfolio';

const Main = () => {
  return (
    <div className='main'>
      <Greeting/>
      <Line idl="port"/>
      <Portfolio/>
      <Line idl='serv'/>
    </div>
  );
}

export default Main;
