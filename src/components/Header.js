import * as React from 'react';
import logo from '../assets/img/logo.svg';
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


const logoStyle = {
  width: '40px',
  height: 'auto',
  cursor: 'pointer',
};

function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  }

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

let pagesOptions = pageNames.map((pageName) => (
    <MenuItem
        onClick={() => scrollToSection(pageName)}
        sx={{ py: '6px', px: '12px' }}
      >
      <Typography variant="body2" color="text.primary">
      {pageName}
      </Typography>
    </MenuItem>)
)

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          justifyContent: 'flex-start',
          width: '100%',
          borderBottom: '0.2px solid gray',
          backgroundColor: 'background.paper'}}
      >
        <Container maxWidth="100%" >
          <Toolbar
            variant="regular"
            sx={() => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              maxHeight: 40,
              width: '100%',   
            })}
          >
            <Box
              sx={{
                display: 'flex',
                ml: '0px',
                px: 0,
              }}
            >
              <img
                src={
                  logo
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
                pr:'30px'
              }}
            >
                              {pagesOptions}


            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                  </Box>
                  {pagesOptions}
                  <Divider />
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