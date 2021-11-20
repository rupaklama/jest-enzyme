import React from 'react';

import { useTranslation } from 'react-i18next';
import i18n from '../locales/i18n';

const SignupPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('SIGN_UP')}</h1>
      <img
        src='./assets/nepal.jpg'
        width='50px'
        title='Nepali'
        onClick={() => i18n.changeLanguage('ne')}
        alt='nepal flag'
      />

      <img
        src='./assets/us.png'
        width='60px'
        title='English'
        onClick={() => i18n.changeLanguage('en')}
        alt='us flag'
      />
    </div>
  );
};

export default SignupPage;
