import React, { createContext, useContext, useState } from 'react';

// Crea el contexto
const LanguageContext = createContext();

// Componente principal que contiene toda la funcionalidad
const App = () => {
  const [language, setLanguage] = useState('es');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="App">
        <h1>Aplicación de Traducción</h1>
        <LanguageSelector />
        <Mensaje />
      </div>
    </LanguageContext.Provider>
  );
};

// Componente para seleccionar el idioma
const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
};

// Componente para mostrar el mensaje
const Mensaje = () => {
  const { language } = useContext(LanguageContext);

  return (
    <p>
      {language === 'es' 
        ? 'El idioma seleccionado es Español' 
        : 'The selected language is English'}
    </p>
  );
};

export default App;