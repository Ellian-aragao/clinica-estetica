import PageHorarios from './pages/horarios/horarios';
import PageLogin from './pages/login/login';
import PageServicos from './pages/servicos/servicos';
import PageHome from './pages/home/home';
import { MenuItem } from 'primereact/api';

export interface menu extends MenuItem {
  id?: number;
  component?: any;
}

export enum RoutesEnum {
  Home,
  Login,
  Serviço,
  Horário,
}

export const RoutesInfo: menu[] = [
  {
    id: RoutesEnum.Home,
    label: 'Home',
    url: '/',
    icon: 'pi pi-fw pi-home',
    component: PageHome,
  },
  {
    id: RoutesEnum.Serviço,
    label: 'Serviços',
    url: '/servicos',
    icon: 'pi pi-fw pi-list',
    component: PageHorarios,
  },
  {
    id: RoutesEnum.Horário,
    label: 'Horário',
    url: '/horarios',
    icon: 'pi pi-fw pi-calendar',
    component: PageServicos,
  },
  {
    id: RoutesEnum.Login,
    label: 'Login',
    url: '/login',
    component: PageLogin,
  },
];
