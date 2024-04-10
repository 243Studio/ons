import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './component.css';
import { googleMapLink } from '../utils/utils';

import partnerLogo from '../assets/img/partners.png';
import building1 from '../assets/img/building1.jpg';
import building2 from '../assets/img/building2.jpg';
import building3 from '../assets/img/building3.jpg';
import mission from '../assets/img/drawng/mission.png';
import businessArea from "../assets/img/business-area.png";
import Typography from '@mui/material/Typography';
import { businessAreaList } from '../utils/utils';
import { Box, CardContent, Card, Grid, List,ListItem, ListItemText } from '@mui/material';

function Hero({isOpen}) {

  let styleOfTheCover = {maxHeight: '100vh', maxWidth: '100vw'
}
  let styleOfTheImage = {
    position: 'relative', 
    height: '100%',
    objectFit:"cover", 
    width: 'auto'}

    return (
    <Box id="회사소개" className={`hero ${isOpen ? 'dropdown-open' : ''}`} sx={{maxHeight:'100vh'}}>
        <Carousel showThumbs={false} showStatus={false} sx={{maxWidth:'100vw'}}	className='carousel-container'autoPlay infiniteLoop>
          
          <Box className='image-container'  sx={styleOfTheCover}>
            <img id="building-image" src={building1} alt="building 1" sx={styleOfTheImage}/>
            <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                bgcolor: 'rgba(0, 0, 0, 0.5)'
            }} />
            <Box sx={{position: 'absolute',
                top: '50%',
                left: '50%',
                width: '90%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                color: 'white'}}>
                  <Typography className='carousel-text' variant="h3" color="text.secondary" sx={{color:'white'}}>
                  OnS 는 Outsourcing 전문기업입니다
                  </Typography>
                  <br/><br/><br/>
              <Typography className='carousel-text' variant="h4" color="text.secondary" sx={{
              }}>
                주식회사 오앤에스는 <b>Outsourcing & Service</b> 전문가인 사람들만을 모았기에 다양한 사업영역을 수행한 경험 속에서 축적한 노하우를 바탕으로 고객사와 지속적으로 소통하여 가장 좋은 선택지가 될 수 있는 비즈니스 플랜 서비스를 제시합니다
              </Typography>
           </Box>
          </Box>
          <Box className='image-container' sx={styleOfTheCover}>
            <img src={building2} alt="building 2" sx={styleOfTheImage} />
            <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                bgcolor: 'rgba(0, 0, 0, 0.5)'
            }} />
            <Box sx={{position: 'absolute',
                top: '50%',
                left: '50%',
                width: '90%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                color: 'white'}}>
                  <Typography className='carousel-text' variant="h4" color="text.secondary" sx={{}}>
                    OnS 는 Outsourcing & Service 약자로 전문적인 아웃소싱 서비스를 제공합니다.
                  </Typography>
                  <br/><br/><br/>
              <Typography className='carousel-text' variant="h5" color="text.secondary" sx={{
              }}>
                  다양한 사업분야를 경험한 전문가 집단으로 우리의 일이 고객사와 근로자에게
                  더 나은 내일을 가져다 줄 것이라고 확신합니다. 내일을 아름답게 만드는 것은 끊임없는
                  노력이 있어야만 가능합니다. 
                  빠르게 변화하는 글로벌 시장 속에서 뒤처지지 않기 위해 늘 먼저 움직이려 합니다. 정확한
                  분석과 타당한 근거를 바탕으로 여러분에게 새로운 길을 제시하겠습니다.              
              </Typography>
           </Box>
          </Box>
          <Box className='image-container' sx={styleOfTheCover}>
            <img src={building3} alt="building 3" sx={styleOfTheImage} />
            <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                bgcolor: 'rgba(0, 0, 0, 0.5)'
            }} />
            <Box sx={{position: 'absolute',
                top: '50%',
                left: '50%',
                width: '80%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                color: 'white'}}>
              <img src={mission} alt="mission" sx={{width: '50%'}}/>
           </Box>
          </Box>
          
        </Carousel>
      </Box>
    );
  }
  

function ResponsiveCard(){

  let CardList = businessAreaList.map((businessArea) => (
    <Grid item xs={12} sm={6} md={4} lg={2} sx={{display:'flex', justifyContent:'center'}}>
      <Card sx={{ flex:'1' }} >
      <CardContent>
        <img src={building1} style={{maxHeight:'90px', width:'auto'}} ></img><br/><br/>
        <Typography variant="h7" color="text.tertiary" sx={{textAlign:'center', fontWeight:'800'}}>
          {businessArea[0]}
        </Typography>
          <br/>
        <ul style={{padding:'0px 15px'}}>
          {businessArea[1].map((service) => (
            <li style={{textAlign:'left', fontWeight:'500', fontSize:'small'}}>
              {service}
            </li> 
          ))}
        </ul>
        

      </CardContent>
      </Card>
    </Grid>
  ))
  return(
    <Box id="서비스" sx ={{position:'relative', maxHeight:'max-content', minHeight:'50vh', display:'flex', flexDirection:'column', justifyContent:'flex-start',my:'2rem', alignItems:'center'}}>
      <Typography variant="h2" color="text.tertiary" sx={{fontWeight:'800'}}>
        서비스
      </Typography>
      <Grid  sx={{marginTop:'2rem', maxWidth:'70%', maxHeight:'100%',  }} justifyContent="center" container spacing={2}>
      {CardList}
      </Grid>
    </Box>
  )
} 

function Location()
{
  return(
    <Box id="오시는길" sx={{maxWidth:'100vw', display:'flex', flexDirection:'column', justifyContent:"flex-start", alignItems:'center'}}>
      <Typography variant="h2" color="text.tertiary" sx={{my:'3rem', fontWeight:'800'}}>
        오시는길
      </Typography>
      <iframe style={{width:'90%'}} src={googleMapLink}  height="500" className='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Box>
  )
}
export {Hero, ResponsiveCard, Location}