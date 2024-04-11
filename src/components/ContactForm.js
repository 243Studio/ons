import { TextField, Box, Typography, Button } from '@mui/material'
import React from 'react'
export default function ContactForm() {
  return (
    <Box sx={{position:'absolute', height:'100vh', width:'100vw', bgcolor:'white', zIndex:'3000'}} className="contact-form-container">
        <Box ></Box>
        <Button 
        sx={{
            position:'absolute', 
            width:'30px', 
            top:'5%', 
            right:'5%', 
            height:'40px', 
            bgcolor:'green'
        }} 
        variant="outlined" 
        >
      </Button>
        <Box>
            <Typography variant="h4" color="text.tertiary" sx={{textAlign:'center', my:'1rem', fontWeight:'800'}}>Contact Form</Typography>
        </Box>
              <TextField id="" label="Outlined" variant="outlined" />
    </Box>
  )
}
