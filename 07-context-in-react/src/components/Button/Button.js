import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useColor } from '../../contexts/ColorContext';

const Button = () => {
  const { language } = useLanguage();
  const { color } = useColor()

  return (
    <button className={`ui button ${color.col}`}>
      {language.lang === 'english' ? 'Submit' : 'Voorleggen'}
    </button>
  );
}

export default Button;
