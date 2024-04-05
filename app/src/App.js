import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { googleMapLink } from './utils/utils.js';
import Header from './components/Header.js';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
        {/**<Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Hero isOpen={isOpen}/>
        <div><div><p>Hello world</p></div></div>
        <iframe src={googleMapLink}  height="450" className='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>**/}
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />  
    </div>
  )
}

export default App;
