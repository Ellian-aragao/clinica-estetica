import React from 'react';

import PageHeader from '../components/header/header';
import HeaderInterface from '../interfaces/Header';

const BasePage: React.FC<HeaderInterface> = (props) => (
  <div>
    <header>
      <PageHeader itemAtivo={props.itemAtivo}></PageHeader>
    </header>
    <main>{props.children}</main>
  </div>
);

export default BasePage;
