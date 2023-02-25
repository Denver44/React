import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext({
  lang: 'english',
  onLanguageChange: (lang) => { },
});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState({ lang: 'english' })
  const onLanguageChange = language => {
    setLanguage({ lang: language });
  };

  return (
    <LanguageContext.Provider
      value={{ ...{ language, onLanguageChange } }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useApp must be used within a UserProvider');
  }
  return context;
}

export { LanguageProvider, useLanguage };


