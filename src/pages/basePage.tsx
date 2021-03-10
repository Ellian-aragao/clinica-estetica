import React from 'react';

import PageHeader from '../components/header/header';
import HeaderInterface from '../interfaces/Header';

const BasePage: React.FC<HeaderInterface> = (props) => (
  <div className='p-d-flex p-flex-row p-jc-center'>
    <div className='p-lg-8'>
      <header className='p-lg-12'>
        <PageHeader itemAtivo={props.itemAtivo}></PageHeader>
      </header>
      <main className='p-lg-12 p-card' style={{ marginTop: '1rem' }}>
        {props.children}
      </main>
    </div>
  </div>
);

export default BasePage;
