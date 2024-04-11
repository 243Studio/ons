import {Box, Grid, Typography} from '@mui/material';
import logo from '../assets/img/logo.svg';
function Footer() {
    return (
        <footer id="연락처" className='footer-wrap' >
        <Box className='footer-container' sx={{display:'flex', maxWidth:'100vw', justifyContent:'center', alignItems:'center', mx:'auto', width:'85%'}} >
            <Grid container spacing={2} sx={{display:'flex', mx:'auto', justifyContent:'space-between', alignItems:'center'}}>
                <Grid item xs={12} sm={4}>
                    <img src={logo} style={{maxWidth:'4rem'}} className='footer-col'/>
                    <Typography variant="h6" color="text.tertiary" sx={{textAlign:'left', my:'1rem', fontWeight:'800'}}>주식회사 오앤에스</Typography>

                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h5" color="text.tertiary" sx={{textAlign:'left', marginBottom:'1rem', fontWeight:'800'}}>
                        연락처
                    </Typography>
                    <ul style={{textAlign:'left', color:'#00448A'}}>
                        <li class="tel">+82-02-6474-4208</li>
                        <li>+82-10-4520-0449</li>
                    </ul>
                </Grid>
            </Grid>
        </Box>
    </footer>
  )
}


export {Footer}