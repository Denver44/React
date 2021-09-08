import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useColor } from '../../contexts/ColorContext';

const LanguageSelector = () => {
  const { onLanguageChange } = useLanguage()
  const { colorPicker } = useColor()
  return (
    <div>
      Select a language:
      <i
        className="flag us"
        onClick={() => {
          onLanguageChange('english')
          colorPicker('red')
        }}
      />
      <i
        className="flag nl"
        onClick={() => {
          onLanguageChange('dutch')
          colorPicker('blue')
        }}
      />
    </div>
  );
}

export default LanguageSelector;
