import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import handshake from '../assets/img/photos/handshake.jpg'
import './CTA.css'


export default function CTA({openContactForm}) {
  return (
    <Box id="문의하기" sx={{marginTop:{xs:'50px', md:'100px'},position:'relative', maxHeight:'60vh', height:'60vh', width:'100vw'}}>
        <img style={{height:'100%', width:'100%', objectFit:'cover'}} alt={`${handshake}`} src={handshake}/>
        <Box sx={{position:'absolute', top:'0%', left:'0%', height:'100%', width:'100%', bgcolor: 'rgba(0,0,0,0.8)'}} />
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', position:'absolute', top:'0%', left:'0%', height:'100%', width:'100%', flexDirection:'column'}}>
            <Box sx={{ color:'white', height: {xs:'50%', md:'40%'}, width:{xs: '80%', md:'50%'}, display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                
                <Box sx={{fontFamily:'Nanum Gothic', display:'flex', flexDirection:{xs:'column', md:'row'}, justifyContent:'center', alignItems:'center', position:'relative'}}>
                  <Typography className='cta-h2' color={'white'} sx={{position:'relative', marginBottom:{xs:'1rem', md:'0px'}}} variant='h3' fontWeight={'800'} fontSize={{xs:'2rem',  md:'2rem'}}>신규 고객 이벤트 </Typography>
                  <span  className='cta-span' style={{position:'relative', fontSize:'2rem', color:'#f0929d', fontWeight:'800', marginLeft:'112px'}}> 3개월 추가 혜택</span>
                </Box>
                  <p className='cta-p'>지금 바로 신청하시면 3개월 추가 혜택을  <br className='brake'/>받으실 수 있습니다.</p>
                <Button  sx={{paddingY:'1rem', paddingX:'3rem', borderRadius:'60px', bgcolor:'#00448A', mt:{xs:'0rem', md:'3rem'}}} size={'large'} variant='contained' onClick={openContactForm}>
                    <Typography  color={'white'} variant='h4' fontWeight={'700'}>문의하기</Typography>
                </Button>
            </Box>
        </Box>
    </Box>
  )
}
