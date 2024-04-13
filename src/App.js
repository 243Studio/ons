import './App.css';
import { useState } from 'react';
import Header from './components/Header.js';
import {Hero, Location } from './components/Main.js';
import { Footer } from './components/Footer.js';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import CTA from './components/CTA.js';
import ContactForm from './components/ContactForm.js';
import Privacy from './components/Privacy.js';
import { SnackbarProvider } from 'notistack';

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
      primary:'#000000' ,
      white:'#ffffff',
      tertiary: '#00448A',
    },
    
  }
});
theme = responsiveFontSizes(theme);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [privacyIsOpen, setPrivacyIsOpen] = useState(false);

  function openContactForm(){
    setFormIsOpen(!formIsOpen);
  }
  function closeContactForm(value)
  {
    setFormIsOpen(!value);
  }
  function closePrivacy(){
    setFormIsOpen(true)
    setPrivacyIsOpen(false)
  }
  function openPrivacy(){
    setFormIsOpen(false)
    setPrivacyIsOpen(true);
  }
  return (
    <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={theme}>
      <div className="App">
        <ContactForm formIsOpen = {formIsOpen} drawerState={isOpen} closeForm={openContactForm} openPrivacy={openPrivacy}/>
        <Privacy privacyIsOpen={privacyIsOpen} openPrivacy={openPrivacy} closePrivacy={closePrivacy}/>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} openContactForm={openContactForm} />
        <Hero isOpen={isOpen}/>
        <CTA openContactForm = {openContactForm}/>
        <Location/>
        <Footer/>

      </div>
      </ThemeProvider>
    </SnackbarProvider>
  )
}

export default App;
