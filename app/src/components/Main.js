function Hero({isOpen}) {

    return (
    <div className={`hero ${isOpen ? 'dropdown-open' : ''}`}>
        <Carousel className='carousel-container'autoPlay infiniteLoop>
          <div>
            <img src="image1.jpg" alt="Image 1" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="image2.jpg" alt="Image 2" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="image3.jpg" alt="Image 3" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
  
  function Partners() {
    return (
      <div className='partner-logo-container'>
        <img className='partner-logo' src={partnerLogo}></img>
      </div>
    )
  } 
export {Hero, Partners}