import React, { useState } from 'react';

import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/api';
import { TabMenu } from 'primereact/tabmenu';

import logo from '../../assets/images/logo.svg';
import HeaderInterface from '../../interfaces/Header';

const PageHeader: React.FC<HeaderInterface> = (props) => {
  const [activeItem, setActiveItem] = useState(props.itemAtivo);
  const tabs: MenuItem[] = [
    { label: 'home', url: '/', icon: 'pi pi-fw pi-home' },
    { label: 'serviços', url: '/servicos', icon: 'pi pi-fw pi-list' },
    { label: 'horário', url: '/horarios', icon: 'pi pi-fw pi-calendar' },
  ];
  const breadcrumb: MenuItem[] = [{ label: activeItem }];

  return (
    <header className='p-grid p-dir-col'>
      <a className='p-col p-justify-center' href='/'>
        <img src={logo} alt='Logo' />
      </a>
      <div className='p-col'>
        <TabMenu
          model={tabs}
          activeItem={activeItem}
          onTabChange={(e) => setActiveItem(e.value)}
        />
      </div>
      <BreadCrumb className='p-col' model={breadcrumb} home={tabs[0]} />
    </header>
  );
};

export default PageHeader;
