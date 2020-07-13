import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import messagesFr from './assets/translation/fr';
import Home from './pages/Home';
import Navbar from './components/App/Navbar';

const messages = {
    fr: messagesFr,
};

const App = () => {
  
  const [language, setLanguage] = useState('fr');
  
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Navbar />
      <Home />
    </IntlProvider>
      
    
  )
  
}



export default App;
