import React from 'react';

import PageHeader from '../components/header/header';
import HeaderInterface from '../interfaces/Header';

const BasePage: React.FC<HeaderInterface> = (props) => (
  <div className='p-grid p-justify-center'>
    <div className='p-dir-col'>
      <header className='p-col'>
        <PageHeader itemAtivo={props.itemAtivo}></PageHeader>
      </header>
      <main className='p-col'>{props.children}</main>
    </div>
  </div>
);

export default BasePage;
