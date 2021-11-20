import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import '../locales/i18n';

import languageEN from '../locales/en/translation.json';
import languageNE from '../locales/ne/translation.json';

import SignupPage from './SignupPage';

describe('Sign Up Page', () => {
  beforeEach(() => {
    render(<SignupPage />);
  });

  it('initially has header in English', () => {
    const header = screen.getByRole('heading', { name: languageEN.SIGN_UP });
    expect(header).toBeInTheDocument();
  });

  it('displays header text in Nepali', () => {
    // query by title instead of an element
    const textNE = screen.getByTitle('Nepali');
    fireEvent.click(textNE);

    const header = screen.getByRole('heading', { name: languageNE.SIGN_UP });
    expect(header).toBeInTheDocument();
  });

  it('displays header text in English after changing back from Nepali', () => {
    // query by title instead of an element
    const textNE = screen.getByTitle('Nepali');
    fireEvent.click(textNE);

    const textEN = screen.getByTitle('English');
    fireEvent.click(textEN);

    const header = screen.getByRole('heading', { name: languageEN.SIGN_UP });
    expect(header).toBeInTheDocument();
  });
});
