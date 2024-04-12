import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import handshake from '../assets/img/photos/handshake.jpg'

export default function CTA({openContactForm}) {
  return (
    <Box id="문의하기" sx={{position:'relative', maxHeight:'60vh', height:'60vh', width:'100vw'}}>
        <img style={{height:'100%', width:'100%', objectFit:'cover'}} src={handshake}/>
        <Box sx={{position:'absolute', top:'0%', left:'0%', height:'100%', width:'100%', bgcolor: 'rgba(0,0,0,0.8)'}} />
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', position:'absolute', top:'0%', left:'0%', height:'100%', width:'100%', flexDirection:'column'}}>
            <Box sx={{height: '40%', width:{xs: '85%', md:'50%'}, display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                <Typography  color={'white'} variant='h4'>지금 바로 클릭하여 우리에게 연락해 주세요. 함께 최적의 비즈니스 플랜을 구상해 나갈 수 있습니다.</Typography>
                <Button  sx={{bgcolor:'#00448A'}} size={'large'} variant='contained' onClick={openContactForm}>
                    <Typography  color={'white'} variant='h4'>서비스의뢰</Typography>
                </Button>
            </Box>
        </Box>
    </Box>
  )
}
