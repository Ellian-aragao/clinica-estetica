import React from 'react';
import BasePage from '../../components/basePage';
import { RoutesEnum } from '../../routes.const';

const home = () => (
  <BasePage itemAtivo={RoutesEnum.Home} >
    <h1>Home</h1>
  </BasePage>
);

export default home;
