import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import $ from 'jquery';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackTop } from 'antd';
import messagesFr from './assets/translation/fr';
import Home from './pages/Home';
import Navbar from './components/App/Navbar';
import Footer from './components/App/Footer';

const messages = {
    fr: messagesFr,
};

const App = () => {
  
  const [language, setLanguage] = useState('fr');
  
  useEffect(() => {
    
    $("#navbar a").on('click', function(event) {
    
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
    
        // Prevent default anchor click behavior
        event.preventDefault();
    
        // Store hash
        var hash = this.hash;
    
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
    
        // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
    
      } // End if
    
    }); 
  },[])
  
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      
      <Navbar />
      <Home />
      <Footer />
      <BackTop>
        <div className="rounded bg-primary d-flex justify-content-center p-2 text-white"><FontAwesomeIcon icon={faArrowUp} /></div>
      </BackTop>
    </IntlProvider>
      
    
  )
  
}



export default App;
