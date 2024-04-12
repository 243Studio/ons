import * as React from 'react';
import logo from '../assets/img/logo.png';
import logoWhite from '../assets/img/logo-white.png';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { pageNames } from '../utils/utils';
import { withTheme } from '@emotion/react';


const logoStyle = {
  width: '40px',
  height: 'auto',
  cursor: 'pointer',
};
const buttonStyle = {
  fontWeight: 'bold'
}

function Header({openContactForm}) {
  const headerRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const menuRef= React.useRef(null);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  }
  
  
  React.useEffect(() => {
    let handleScroll = () => {
      const currentScrollY = window.scrollY;
      if(headerRef.current){
        if (currentScrollY > 2) {
          headerRef.current.style.backgroundColor = "white";
          headerRef.current.style.color = "black";
          headerRef.current.style.transition = "background-color 0.5s ease";
          logoRef.current.src = logo
          menuRef.current.style.color = "#00448A";
          menuRef.current.style.transition = "background-color 0.5s ease";
          logoRef.current.style.transition = "background-color 0.5s ease";
        }
        else if(currentScrollY === 0){
          headerRef.current.style.backgroundColor = "transparent";
          headerRef.current.style.color = "white";
          headerRef.current.style.transition = "background-color 0.5s ease";
          logoRef.current.src = logoWhite;
          menuRef.current.style.color = "white";
          logoRef.current.style.transition = "background-color 0.5s ease";
        }}
    };
    window.addEventListener('scroll', ()=>handleScroll());
    return () => window.removeEventListener('scroll', handleScroll);
  })

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
}

let pagesOptions = pageNames.map((pageName, index) => (
    <MenuItem
        key={index}
        onClick={() => scrollToSection(pageName)}
        sx={{ py: '6px', pr: '8px' }}
      >
      <Typography variant="body2" sx={buttonStyle}>
      {pageName}
      </Typography>
    </MenuItem>)
)

  return (
    <div>
      <AppBar
        ref={headerRef}
        id="header"
        position="fixed"
        sx={{
          boxShadow: 0,
          justifyContent: 'flex-start',
          maxWidth:'100vw',
          color:'primary',
          backgroundColor:"transparent"
      }}
      >
        <Container maxWidth="100vw" >
          <Toolbar
            variant="regular"
            sx={() => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              maxHeight: 50,
              maxWidth: '100vw',   
            })}
          >
            <Box
              sx={{
                display: 'flex',
                flexGrow: 2,
              }}
            >
              <img
                ref={logoRef}
                src={
                  logoWhite
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.2,
                alignItems: 'center',paddingLeft:'40px'
              }}
            >
              {pagesOptions}
              <Button  sx={{bgcolor:'#00448A', ml:'3rem'}} size={'medium'} variant='contained' onClick={openContactForm}>
                  <Typography  color={'white'} variant='h7'>서비스의뢰</Typography>
              </Button>            
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                color="primary"
                variant="text"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon ref={menuRef} sx={{color:'white'}} />
              </Button>
              <Drawer anchor="right"  open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  {pagesOptions}
                  <Divider />
                  <Button  sx={{bgcolor:'#00448A'}} size={'medium'} variant='contained' onClick={openContactForm}>
                    <Typography  color={'white'} variant='h7'>서비스의뢰</Typography>
                  </Button> 
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}


export default Header;