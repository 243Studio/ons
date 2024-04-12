import { Box, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

export default function Privacy ({privacyIsOpen, closePrivacy}) {
  return (
    privacyIsOpen && (<Box sx={{position:'fixed', top:'0%', left:'0', width:'100%', height:'100%', pt:'5%', bgcolor:'white', zIndex:'5000',flexDirection:'column', display:'flex',  alignItems:'center'}}>
        <IconButton 
        sx={{
            position:{xs:'static', md:'absolute'}, 
            width:'40px', 
            top:'5%', 
            right:'5%', 
            height:'40px', 
            backgroundColor:'white',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            border:'0.5px solid black',
            marginBottom:'1rem',
            
        }}
        disableElevation
        size='small'
        variant="outlined" 
        label="close"
        onClick={closePrivacy}
        >
            
            <CloseIcon id='close-icon' sx={{color:'black'}}/>
            </IconButton>
        <Typography variant="h4" color="text.primary" sx={{textAlign:'center', margin:'1rem 0rem 3rem 0rem' }}>Privacy Policy</Typography>
        <Box sx={{mx:'auto', width:'90%', height:'0.3px', backgroundColor:'rgba(0,0,0,0.2)'}}></Box> 
        <Box sx={{mt:'3rem', width:'100%', height:'max-content', display:'flex', flexDirection:'column', justifyContent:'center' , alignItems:'center' }}>
            <Typography variant="h7" color="text.primary" sx={{textAlign:'center', margin:'1rem 0rem 3rem 0rem' }}>이 부분을 작성해야 합니다.</Typography>
        </Box>
    </Box>)
  )
}
