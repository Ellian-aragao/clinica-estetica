import React from 'react';
import BasePage from '../../components/basePage';
import { RoutesEnum } from '../../routes.const';

const PageLogin = () => (
  <BasePage itemAtivo={RoutesEnum.Login} >
    <span>login</span>
  </BasePage>
);

export default PageLogin;
