import React, { useState } from 'react';

import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/api';
// import { BreadCrumb } from 'primereact/breadcrumb';
// import { MenuItem } from 'primereact/components/menuitem/MenuItem';
import { TabMenu } from 'primereact/tabmenu';

import logo from '../../assets/images/logo.svg';
import HeaderInterface from '../../interfaces/Header';

const PageHeader: React.FC<HeaderInterface> = (props) => {
  const [activeItem, setActiveItem] = useState(props.itemAtivo);
  const tabs: MenuItem[] = [
    { label: 'home', url: '/', icon: 'pi pi-fw pi-home' },
    { label: 'serviços', url: '/servicos' },
    { label: 'horário', url: '/horarios', icon: 'pi pi-fw pi-calendar' },
  ];
  const breadcrumb: MenuItem[] = [{ label: activeItem }];

  return (
    <header>
      <a href='/'>
        <img src={logo} alt='Logo' />
      </a>
      <TabMenu
        model={tabs}
        activeItem={activeItem}
        onTabChange={(e) => setActiveItem(e.value)}
      />
      <BreadCrumb model={breadcrumb} home={tabs[0]} />
    </header>
  );
};

export default PageHeader;
