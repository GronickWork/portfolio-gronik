import React from 'react';
import './sertificates.scss';
import SertificatesList from './sertificates-list/SertificatesList';
import { sertSolo } from '../../data/sert-solo-list'
import { sertStepik } from '../../data/sert-stapik-list';
import { sertNeto } from '../../data/sert-neto-list';

const Sertificates = () => {
  return (
    <div className='certificates'>
      <h2 className='cert_head'>Сертификаты</h2> 
      <SertificatesList header='2018 SoloLearn' list={sertSolo}/>
      <SertificatesList header='2020 Stepik' list={sertStepik}/>
      <SertificatesList header='2026 Нетология' list={sertNeto}/>
    </div>
  );
}

export default Sertificates;
