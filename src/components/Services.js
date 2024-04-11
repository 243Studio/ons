import { Box, Typography, Grid } from '@mui/material'
import './services.css'
import React from 'react'
import { ServiceList } from '../utils/utils'
import logoResponsive from '../assets/img/logo/logo-responsive.png'
import okay from "../assets/img/icons/okay.svg"
let textGridStyle = {
  display:'flex', 
  justifyContent:'center', 
  textAlign:'left',
  flexDirection:'column',
  alignItems:'flex-start',
  backgroundColor:'rgba(240,240,240,0.5)',
  width:'100%',
  color:'black'
}
let imageGridStyle = {
  display:'flex', 
  justifyContent:'center', 
  alignItems:'center',
  width:'50%',
  height:'100%',
  margin:'3rem 0',

}
export default function Services() {

  let ServiceItems = ServiceList.map((item, index) => (
      <ServiceItem
        className={(index % 2 === 0) ? 'even-service' : 'odd-service'}
        item={item}
      />
    ));
  return (
    <Box id="서비스" className="service-container-wrapper">
      <Box my={'4rem'}>

      <Box mb={'4rem'}  sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
        <img style={{height:'50px', width:'auto'}} src={logoResponsive} ></img>
        <Typography color={"#00448A"} fontWeight={'bold'}  variant="h3">인력파견 부문</Typography>
      </Box>
      <Typography textAlign={'center'} color={"rgba(0,0,0,0.4)"} fontWeight={'bold'}  variant="h7">인력파견부문 운영 하고 있습니다</Typography>

      </Box>

        {ServiceItems}
    </Box>
  )
}

function ServiceItem({item, className}) {

  let customDirection = className==="odd-service" ? 'row' : 'row-reverse';

  console.log(customDirection)
  return (
    <Grid className='service-container' container direction={{ xs:'column',sm:`${customDirection}` }} rowSpacing={{ xs:0 }} columnSpacing={{xs: 0, sm: 1, md: 0}} >
      {(className==="odd-service"
      ?(
        <>
          <Grid direction={"column"} sx={textGridStyle} className={className} item xs={12} sm={6} key={item.id}>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <Typography className="service-text-title"  variant="h4">{item.title}</Typography>
              <img style={{height:'40px', paddingLeft:'1rem'}} src={okay}/>
            </Box>            <Grid  className = "service-text-line" style={{width:'30px', height:'5px', backgroundColor:'#00448A'}}/>
            <p className="service-text-content" >{item.content}</p>
          </Grid>
          <Grid className="service-image-container"  sx={{imageGridStyle}} item xs={12} sm={6} md={6} key={item.id}>
            <img className="service-image" src={item.img}></img>
          </Grid>
        </>
      ) 
      :(<>
        <Grid direction={"column"} sx={textGridStyle} className={className}  item xs={12} sm={6} key={item.id}>
          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <Typography className="service-text-title"  variant="h4">{item.title}</Typography>
            <img style={{height:'40px', paddingLeft:'1rem'}} src={okay}/>
          </Box>
          <Box  className = "service-text-line" style={{width:'30px', height:'5px', backgroundColor:'#00448A'}}/>
          <p className="service-text-content">{item.content}</p>
        </Grid>
        <Grid className="service-image-container"  item xs={12} sm={6} md={6} key={item.id}>
          <img className="service-image" src={item.img}></img>
        </Grid>
        
      </>)
    )}
    </Grid>
  )
}
