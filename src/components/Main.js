import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './component.css';
import partnerLogo from '../assets/img/partners.png';

function Hero({isOpen}) {

    return (
    <div className={`hero ${isOpen ? 'dropdown-open' : ''}`}>
        <Carousel className='carousel-container'autoPlay infiniteLoop>
          <div>
            <img src={partnerLogo} alt="Image 1" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={partnerLogo} alt="Image 2" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={partnerLogo} alt="Image 3" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
  
  function Partners() {
    return (
      <div id="파트너" className='partner-logo-container'>
        <h2>Partners</h2>
        <img className='partner-logo' src={partnerLogo}></img>
      </div>
    )
  } 
export {Hero, Partners}