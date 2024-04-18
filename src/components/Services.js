import { Box, Typography, Grid } from '@mui/material'
import './services.css'
import React from 'react'
import { businessAreaList } from '../utils/utils'
import logoResponsive from '../assets/img/logo/logo-responsive.png'
import okay from "../assets/img/icons/okay.svg"

let textGridStyleOdd = {
  display:'flex', 
  justifyContent:'center', 
  textAlign:'left',
  flexDirection:'column',
  alignItems:'flex-start',
  backgroundColor:'#F4F4F4',
  width:'100%',
  color:'black',
}
let textGridStyleEven = {
  display:'flex', 
  justifyContent:'center', 
  textAlign:'left',
  flexDirection:'column',
  alignItems:'flex-start',
  backgroundColor:'#F4F4F4',
  width:'100%',
  color:'black',
  paddingLef:'20rem'
}

export default function Services() {
  

  let ServiceItems = businessAreaList.map((item, index) => (
      <ServiceItem
        key={item + index}
        className={(index % 2 === 0) ? 'even-service' : 'odd-service'}
        item={item}
      />
    ));
  return (
    <Box id="서비스" className="service-container-wrapper">
      <Box sx={{
        paddingTop:{xs:'50px', md:'100px'},
        margin:'0rem 0rem 4rem 0rem'}}>
        <Box mb={'1rem'}  sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
          <img alt={`${logoResponsive}`} style={{height:'50px', width:'auto'}} src={logoResponsive} ></img>
          <Typography color={"#00448A"} fontWeight={'800'}  variant="h3"><span style={{color:'black'}}>OnS만의 </span>서비스</Typography>
        </Box>
        <Typography fontSize={{xs:'0.8rem', md:'1.2rem'}} textAlign={'center'} fontWeight={'500'}  variant="h7">고객이 원하는 최적화된 솔루션을 제공해드립니다</Typography>
      </Box>

        {ServiceItems}
    </Box>
  )
}

function ServiceItem({item, className}) {

  let customDirection = className==="odd-service" ? 'row' : 'row-reverse';
  let customPosition = className==="even-service" ? 'service-right' : '';
  let textCustomPosition = className==="odd-service" ? 'service-text-right' : '';
  let lineCustomPosition = className==="odd-service" ? 'service-line-right' : '';
  let textGridStyle = className==="odd-service" ? textGridStyleEven : textGridStyleOdd;



  return (
    <Grid className='service-container' container direction={{ xs:'column-reverse',sm:`${customDirection}` }} rowSpacing={{ xs:0 }} columnSpacing={{xs: 0, sm: 1, md: 0}} >
      <Grid sx={textGridStyle} className={className}  item xs={12} sm={6} key={item.id}>
          <Box  sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <Typography fontWeight={'600'} fontSize={'21px'} className={`service-text-title ${textCustomPosition}`}  variant="h5">{item.title}</Typography>
            <img alt={`${okay}`}style={{height:'30px', paddingLeft:'10px'}} src={okay}/>
          </Box>
          <Box  className={`service-text-line ${lineCustomPosition}`} style={{width:'30px', height:'5px', backgroundColor:'#00448A'}}/>
          <ul className={`service-text-content ${textCustomPosition}`} style={{listStyle:'none',lineHeight:'30px', fontFamily:"Nanum Gothic"}}>      
            {item.content.map((content, index)=><li style={{fontSize:'14px', fontWeight:'500', display:'flex', flexDirection:'row', alignItems:'flex-start'}}key={index}><p style={{fontSize:'10px',marginTop:'0.5rem', backgroundColor:'#00448A', width:'18px', display:'flex', justifyContent:'center', alignItems:'center', height:'18px', color:'white', borderRadius:'100%', marginRight:'8px'}}>{index + 1}</p>{content}</li>)}
          </ul>
        </Grid>
        <Grid  className="service-image-container"  item xs={12} sm={6} md={6} key={item.id}>
          <img alt={`${item.img}`} className={`service-image ${customPosition}`} src={item.img}></img>
          <Box className={`service-image-darkbg ${customPosition}`}>
            <Typography  variant="h4">{item.translation}</Typography>
          </Box>
        </Grid>
    </Grid>
  )
}


