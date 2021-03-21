import React from 'react';
import BasePage from '../../components/basePage';
import { RoutesEnum } from '../../routes.const';

const PageLogin: React.FC = () => (
  <BasePage itemAtivo={RoutesEnum.Login} >
    <span>login</span>
  </BasePage>
);

export default PageLogin;
