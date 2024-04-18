import './component.css';
import { googleMapLink, processDetails, processSteps } from '../utils/utils';
import './Main.css'
import logo from '../assets/img/logo/logo-responsive.png';
import * as React from 'react';
import building1 from '../assets/img/building1.jpg';
import building2 from '../assets/img/building2.jpg';
import { Box, Grid, Typography } from '@mui/material';
import { CustomCarousel } from './Carousel';
import service1 from '../assets/img/icons/service1.png';
import service2 from '../assets/img/icons/service2.png';
import service3 from '../assets/img/icons/service3.png';
import Services from './Services';
import './CTA.css'
const images = [
  {
    "name":"building 1", 
    "link":building1,
    "title": "국내 최초 NEW 패러다임 CX 통합 플랫폼", 
    "content": "휴먼쉐어링이 삶이 되다."
  }, 
  {
    'name':"building 2", 
    "link":building2,
    "title": "고객님은 더 중요한 업무에 전념하세요!", 
    "content": "단순/반복 업무는 Digital Workforce(팔레트 블랙아이 /팔레트 레드)가 전문적인 상담은 저희 KPP 휴먼상담사가 처리해 드리겠습니다."
  }
]

function Hero({isOpen}) {

    return (
    <Box id="회사소개" className={`hero ${isOpen ? 'dropdown-open' : ''}`}>
            <CustomCarousel items={images} />
            <Box className="illust-container">
              <img alt={`${service1}`}  id="illust1" src={service1} />
              <img alt={`${service2}`}  id="illust2" src={service2} />
              <img alt={`${service3}`}  id="illust3" src={service3} />
            </Box>
            <Services />
      </Box>
    );
  }
  

function Location()
{
  return(
    <Box id="오시는길" sx={{paddingTop:{xs:'50px',md:'100px'},maxWidth:'100vw', display:'flex', flexDirection:'column', justifyContent:"flex-start", alignItems:'center' }}>

      <iframe title='google-map' className="google-map" style={{width:'100vw'}} src={googleMapLink}    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </Box>
  )
}

function Process(){
  
  let processList = processSteps.map((step, index) => (
    <Grid key={index} item xs={4} md={2.4}>
      <img alt={`process ${step.tittle}`} className='process-illustration' src={step.illustration}/>
      <Typography className='process-number' sx={{marginY:{xs:'1rem', md:'1.5rem'}, position:'relative', color:'white', fontWeight:'600', marginX:'auto', backgroundColor:'#00448A', width:'42px', borderRadius:'100%'}}variant='h4'>{index + 1}</Typography>
      <Typography variant='h7' sx={{width:'10%', fontWeight:550, fontSize:'14px', fontFamily:'Noto Sans KR, sans-serif'}} >{step.title}</Typography>
    </Grid>
  ))
  return(
    <Box className="process-container" sx={{paddingTop:{xs:'80px', md:'150px'}, position:'relative', width:{xs:'90%', md:'65%'}}}>
      <Box sx={{marginBottom:{xs:'50px', md:'100px'}}}>
        <Box sx={{marginBottom:'1rem', display:'flex', flexDirection:'row', justifyContent:"center", alignItems:'center'}}>
          <img alt="OnS logo" style={{height:'50px', width:'auto'}} src={logo}></img>
          <Typography variant='h3' fontWeight={800}>팔레트 <span style={{color:'#00448A'}}>진행프로세스</span></Typography>
        </Box>
        <Typography sx={{width:{xs:'80%', md:'100%'}, marginX:'auto', fontSize:{xs:'1rem', md:'1.2rem'}}}>체계적인 운영 프로세스를 통해 깔끔하고 <br className='brake'></br>효율적인 솔루션 제공</Typography>
      </Box>
      <Grid container spacing={4}>
        {processList}
      </Grid>
    </Box>
  )
}

function ProcessDetailItemList({detail}){
  let detailList = detail.map((item, index) => (<li style={{fontSize:'10px', textAlign:'left'}} key={index}>{item}</li>))
  return(
    <>{detailList}</>
  )
}
function ProcessDetailItemComponent({content}){
  let titleStyle= {fontSize:{xs:'10px', md:'12px'}, textAlign:'left', fontWeight:'550', fontFamily:'Noto Sans KR, sans-serif'}

  let contentList = content.map((detail, index) => (
    <div style={{display:'flex', width:'100%', justifyContent:'space-between'  }} key={index}>
      <p style={{fontSize:'8px', backgroundColor:'#00448A', width:'12px', display:'flex', justifyContent:'center', alignItems:'center', height:'12px', marginTop:'4px', color:'white', borderRadius:'100%', marginRight:'4px'}}>{index + 1}</p>
      <Box sx={{display:'flex', flexDirection:'column', width:'90%' }}>
        <Typography sx={titleStyle} variant='h7'>{detail[0]}</Typography>
        {
          detail.length > 1 
          && (
            <ul style={{display:'flex', paddingInlineStart:'10px', listStyleType:"-", marginBlock:'0.3rem', flexDirection:'column'}}>
              <ProcessDetailItemList detail={detail[1]}/>
            </ul>
            )
          }
        </Box>
    </div>
  ))
  return(
    <Box>
      {contentList}
      {/**<Typography variant='h7' sx={{fontWeight:550, fontSize:'14px', fontFamily:'Noto Sans KR, sans-serif'}} >{content}</Typography>**/}
    </Box>
  )
}

export default function ProcessDetailsComponent() {
let processDetailList = processDetails.map((detail, index) => (
  <Grid sx={{border:"1px solid rgba(0,0,0,0.2)", width:{xs:'90%',md:'100%'}, marginLeft:{xs:'2px', md:'0px'}, marginBottom:'1rem', display:'flex', paddingY:'0 !important', flexDirection:'column'}} key={index} item xs={5.8} md={2.3} >
    <img alt={`process ${detail.title}`} className='process-image' src={detail.img}/>
    <Box sx={{width:'90%', marginX:'auto', marginY:'1rem'}}>
      <ProcessDetailItemComponent content={detail.content}/>
    </Box>
  </Grid>
))
  return (
    <Box sx={{ marginTop:'5rem',width:{xs:'95%', md:'70%'}}}>
      <Grid  sx={{display:'flex', justifyContent:{xs:'space-between', md:"none"}}} container rowSpacing={{xs:'10', md:'0'}}>
        {processDetailList}
      </Grid>
    </Box>
  )
}

export {Hero, Location, Process, ProcessDetailsComponent}