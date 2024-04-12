import './component.css';
import { googleMapLink } from '../utils/utils';

import * as React from 'react';
import building1 from '../assets/img/building1.jpg';
import building2 from '../assets/img/building2.jpg';
import Typography from '@mui/material/Typography';
import { businessAreaList } from '../utils/utils';
import { Box, CardContent, Card, Grid, } from '@mui/material';
import { CustomCarousel } from './Carousel';
import service1 from '../assets/img/icons/service1.png';
import service2 from '../assets/img/icons/service2.png';
import service3 from '../assets/img/icons/service3.png';
import Services from './Services';
import location from '../assets/img/icons/location.png';
import logoResponsive from '../assets/img/logo/logo-responsive.png';




const images = [
  {
    "name":"building 1", 
    "link":building1,
    "title": "OnS는 국내 최초 아웃소싱 전문기업", 
    "content": "주식회사 오앤에스는 Outsourcing & Service 전문가인 사람들만을 모았기에 다양한 사업영역을 수행한 경험 속에서 축적한 노하우를 바탕으로 고객사와 지속적으로 소통하여 가장 좋은 선택지가 될 수 있는 비즈니스 플랜 서비스를 제시합니다"
  }, 
  {
    'name':"building 2", 
    "link":building2,
    "title": "약자로 전문적인 아웃소싱 서비스", 
    "content": "다양한 사업분야를 경험한 전문가 집단으로 우리의 일이 고객사와 근로자에게 더 나은 내일을 가져다 줄 것이라고 확신합니다. 내일을 아름답게 만드는 것은 끊임없는 노력이 있어야만 가능합니다. 빠르게 변화하는 글로벌 시장 속에서 뒤처지지 않기 위해 늘 먼저 움직이려 합니다. 정확한 분석과 타당한 근거를 바탕으로 여러분에게 새로운 길을 제시하겠습니다"
  }
]

function Hero({isOpen}) {

    return (
    <Box id="회사소개" className={`hero ${isOpen ? 'dropdown-open' : ''}`}>
            <CustomCarousel items={images} />
            <Box className="illust-container">
              <img  id="illust1" src={service1} />
              <img  id="illust2" src={service2} />
              <img  id="illust3" src={service3} />
            </Box>
            <Services />
      </Box>
    );
  }
  

function Location()
{
  return(
    <Box id="오시는길" sx={{maxWidth:'100vw', display:'flex', flexDirection:'column', justifyContent:"flex-start", alignItems:'center', }}>
      <Box my={{xs:'0.5rem', md:'2rem' }} sx={{ display:'flex', pt:'5rem',justifyContent:'center', alignItems:'center'}} >
        <img style={{height:'25px', width:'auto', paddingRight:'1rem'}} src={location} ></img>
        <Typography color="text.tertiary" fontWeight={'bold'}   variant="h3">오시는길</Typography>
  </Box>
      <iframe style={{width:'100vw'}} src={googleMapLink}  height="400" className='map' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </Box>
  )
}

export {Hero, Location}