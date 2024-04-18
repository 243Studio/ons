import {Box, Grid, Typography} from '@mui/material';
import logo from '../assets/img/logo.svg';
function Footer() {
    return (
        <footer style= {{fontFamily:'Nanum Gothic'}}id="연락처" className='footer-wrap' >
        <Box className='footer-container' sx={{display:'flex', maxWidth:'80vw', justifyContent:'center', alignItems:'center', mx:'auto', width:'60%', height:'max-content'}} >
            <Grid container rowSpacing={{xs:'4rem'}} sx={{display:'flex', mx:'auto', justifyContent:'space-between', alignItems:'center'}}>
                <Grid sx={{ display:'flex', flexDirection:'column', alignItems:'center'}} item xs={12} sm={6}>
                    <img alt={`${logo}`} src={logo} style={{maxWidth:'4rem'}} className='footer-col'/>
                    <Typography variant="h6" color="text.tertiary" sx={{textAlign:'left', my:'1rem', fontWeight:'800'}}>주식회사 오앤에스</Typography>

                </Grid>
                <Grid sx={{ display:'flex', flexDirection:'column', alignItems:'center'}} item xs={12} sm={6}>
                    <Typography variant="h5" color="text.tertiary" sx={{textAlign:'justify', marginBottom:'1rem', fontWeight:'800'}}>
                        연락처
                    </Typography>
                    <ul style={{textAlign:'justify', color:'#00448A'}}>
                        <li style={{fontFamily:'Nanum Gothic'}} className="tel">+82-02-6474-4208</li>
                        <li>+82-10-4520-0449</li>
                    </ul>
                </Grid>
            </Grid>
        </Box>
    </footer>
  )
}


export {Footer}