import React from 'react';
import UserCreate from './components/UserCreate/UserCreate';
import { ColorProvider } from './contexts/ColorContext';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import { LanguageProvider } from './contexts/LanguageContext';

const App = () => {
  return (
    <div className="ui container">
      <LanguageProvider>
        <ColorProvider>
          <LanguageSelector />
          <UserCreate />
        </ColorProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;



