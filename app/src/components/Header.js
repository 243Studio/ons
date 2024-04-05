import React, { useEffect, useRef, useState } from 'react'
//import * as React from 'react';
import './component.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import partnerLogo from './../assets/img/partners.png';
import PropTypes from 'prop-types';

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
import ToggleColorMode from './ToggleColorMode';
import { Link } from 'react-router-dom';    

export default function Header({isOpen, setIsOpen}) {
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (isOpen && dropdownRef.current) {
          document.querySelector('.hero').style.marginTop = `${dropdownRef.current.offsetHeight}px`;
        } else {
          document.querySelector('.hero').style.marginTop = '3rem';
        }
        
      }, [isOpen]);
  return (
    <header>
        <nav className="navbar">
            <h1 className="logo">Logo</h1>
            <div className={`nav-links ${isOpen ? 'show' : ''}`}>
            
            </div>
            <div ref={dropdownRef} className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>            
        </nav>
    </header>
  )
}

