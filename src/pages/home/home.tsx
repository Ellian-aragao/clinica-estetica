import React, { useEffect, useState } from 'react';
import BasePage from '../../components/basePage';
import { RoutesEnum } from '../../routes.const';
import { Fieldset } from 'primereact/fieldset';
import HomeService from '../../services/home.service';
import TextInterface from '../../interfaces/Text.interface';

const PageHome: React.FC = () => {
  const interfaceTexts: TextInterface[] = [];
  const [texts, setTexts] = useState(interfaceTexts);
  useEffect(() => {
    HomeService.getTexts().then((text) => setTexts(text));
  }, []);
  return (
    <BasePage itemAtivo={RoutesEnum.Home}>
      <h1>Home</h1>
      {texts.map((text) => (
        <Fieldset className='p-mt-4' legend={text.header}>
          <p>{text.body}</p>
        </Fieldset>
      ))}
    </BasePage>
  );
};

export default PageHome;
