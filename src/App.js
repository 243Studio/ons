import './App.css';
import { useState } from 'react';
import Header from './components/Header.js';
import { ResponsiveCard, Hero, Location } from './components/Main.js';
import { Footer } from './components/Footer.js';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import CTA from './components/CTA.js';
import ContactForm from './components/ContactForm.js';

let theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  palette: {
    text: {
      primary: '#000000',
      secondary: '#ffffff',
      tertiary: '#00448A',
    },
    
  }
});
theme = responsiveFontSizes(theme);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openContactForm(){
    console.log('open contact form');
  }
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        
      <Header isOpen={isOpen} setIsOpen={setIsOpen} openContactForm={openContactForm} />
      <Hero isOpen={isOpen}/>
      <CTA openContactForm = {openContactForm}/>
      <Location/>
      <Footer/>
      {//<ContactForm/>
      }
    </div>
    </ThemeProvider>
  )
}

export default App;
