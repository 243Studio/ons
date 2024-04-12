import { Box, Typography, Grid } from '@mui/material'
import './services.css'
import React from 'react'
import { businessAreaList, ServiceList } from '../utils/utils'
import logoResponsive from '../assets/img/logo/logo-responsive.png'
import okay from "../assets/img/icons/okay.svg"

let textGridStyleOdd = {
  display:'flex', 
  justifyContent:'center', 
  textAlign:'left',
  flexDirection:'column',
  alignItems:'flex-start',
  backgroundColor:'rgba(240,240,240,0.5)',
  width:'100%',
  color:'black',
}
let textGridStyleEven = {
  display:'flex', 
  justifyContent:'center', 
  textAlign:'left',
  flexDirection:'column',
  alignItems:'flex-start',
  backgroundColor:'rgba(240,240,240,0.5)',
  width:'100%',
  color:'black',
  paddingLef:'20rem'
}
let imageGridStyle = {
  display:'flex', 
  justifyContent:'center', 
  alignItems:'center',
  width:'50%',
  height:'100%',
  margin:'3rem 0',
  position:'relative'

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
      <Box sx={{margin:'3.5rem 0rem 2rem 0rem'}}>
        <Box mb={'1rem'}  sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
          <img style={{height:'50px', width:'auto'}} src={logoResponsive} ></img>
          <Typography color={"#00448A"} fontWeight={'bold'}  variant="h3"><span style={{color:'black'}}>OnS만의 </span>서비스</Typography>
        </Box>
        <Typography textAlign={'center'} color={"rgba(0,0,0,0.4)"} fontWeight={'bold'}  variant="h7">고객이 원하는 최적화된 솔루션을 제공해드립니다!</Typography>
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
          <Typography className={`service-text-title ${textCustomPosition}`}  variant="h4">{item.title}</Typography>
            <img style={{height:'40px', paddingLeft:'1rem'}} src={okay}/>
          </Box>
          <Box  className={`service-text-line ${lineCustomPosition}`} style={{width:'30px', height:'5px', backgroundColor:'#00448A'}}/>
          <ul className={`service-text-content ${textCustomPosition}`} style={{listStyleType:'circle'}}>      {item.content.map((content, index)=><li key={index}>{content}</li>)}
</ul>
        </Grid>
        <Grid  className="service-image-container"  item xs={12} sm={6} md={6} key={item.id}>
          <img className={`service-image ${customPosition}`} src={item.img}></img>
          <Box className={`service-image-darkbg ${customPosition}`}>
            <Typography  variant="h4">{item.translation}</Typography>
          </Box>
        </Grid>
    </Grid>
  )
}


