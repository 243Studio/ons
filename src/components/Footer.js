import {Box, Grid, Typography} from '@mui/material';
import logo from '../assets/img/logo.svg';
function Footer() {
    return (
        <footer id="연락처" className='footer-wrap' >
        <Box className='footer-container' sx={{display:'flex', maxWidth:'100vw', justifyContent:'center', alignItems:'center', mx:'auto', width:'85%'}} >
            <Grid container spacing={2} sx={{display:'flex', mx:'auto', justifyContent:'space-between', alignItems:'center'}}>
                <Grid item xs={12} sm={4}>
                    <img src={logo} style={{maxWidth:'7rem'}} className='footer-col'/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h2" color="text.tertiary" sx={{textAlign:'left', marginBottom:'3rem', fontWeight:'800'}}>
                        연락처
                    </Typography>
                    <ul style={{textAlign:'left'}}>
                        <li class="name">회사명 : 주식회사 오앤에스</li>
                        <li>
                            <address>
                            주소 : 경기도 부천시 양지로 237
                            </address>
                        </li>
                        <li class="tel">TEL : 02-6474-4208 / 010-4520-0449</li>
                        <li class="email">E-mail : 담당자 김현주 zest@onskorea.co</li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ul className='footer-icon-list'>
                        <li><a href="">개인정보처리방침</a></li>
                    </ul>
                </Grid>
            </Grid>
        </Box>
    </footer>
  )
}


export {Footer}