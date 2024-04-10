import './App.css';
import { useState } from 'react';
import Header from './components/Header.js';
import { ResponsiveCard, Hero, Location } from './components/Main.js';
import { Footer } from './components/Footer.js';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  typography: {
      fontFamily: '"myungjo", "Arial", sans-serif',
  },
  palette: {
    text: {
      primary: '#000000',
      secondary: '#ffffff',
      tertiary: '#00448A',
    }
  },
});
theme = responsiveFontSizes(theme);

function App() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero isOpen={isOpen}/>
      <ResponsiveCard/>
      <Location/>
      <Footer/>
    </div>
    </ThemeProvider>
  )
}

export default App;
