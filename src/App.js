import './App.css';
import { useState } from 'react';
import { googleMapLink } from './utils/utils.js';
import Header from './components/Header.js';
import { Hero, Partners } from './components/Main.js';
import { Footer } from './components/Footer.js';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
        {/**<Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <div><div><p>Hello world</p></div></div>
      **/}
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero isOpen={isOpen}/>
      <Partners/>
      <iframe src={googleMapLink}  height="450" className='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <Footer/>
    </div>
  )
}

export default App;
