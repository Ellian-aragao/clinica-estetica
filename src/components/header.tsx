import React, { useState } from 'react';

import { TabMenu } from 'primereact/tabmenu';

import logo from '../assets/images/logo.svg';
import HeaderInterface from '../interfaces/Header.interface';
import { menu, RoutesEnum, RoutesInfo } from '../routes.const';

const PageHeader: React.FC<HeaderInterface> = (props) => {
  const [activeItem, setActiveItem] = useState(props.itemAtivo);
  const tabs: menu[] = RoutesInfo.filter(
    (route) => route.id !== RoutesEnum.Login,
  );

  return (
    <header className='p-d-flex p-flex-column p-jc-center'>
      <a style={{ margin: 'auto'}} className='p-lg-12' href='/'>
        <img src={logo} alt='Logo' />
      </a>
      <TabMenu
        className='p-lg-12'
        model={tabs}
        activeItem={tabs
          .filter((tab) => tab.id === activeItem)
          .map((tab) => tab.label)}
        onTabChange={(e) => setActiveItem(e.value)}
      />
    </header>
  );
};

export default PageHeader;
