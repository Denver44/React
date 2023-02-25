import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Field = () => {
  const { language } = useLanguage();
  const text = language.lang === 'english' ? 'Name' : 'Naam';
  return (
    <div className="ui field">
      <label>{text}</label>
      <input />
    </div>
  );

}

export default Field;
