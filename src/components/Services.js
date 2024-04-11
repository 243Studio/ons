import { Box, Typography, Grid } from '@mui/material'
import './services.css'
import React from 'react'
import { ServiceList } from '../utils/utils'
import logoResponsive from '../assets/img/logo/logo-responsive.png'

let textGridStyle = {
  display:'flex', 
  justifyContent:'center', 
  textAlign:'left',
  flexDirection:'column',
  alignItems:'flex-start',
  backgroundColor:'rgba(0,68,138,1)',
  width:'100%',
  padding:'1rem 0 0 5rem',
  color:'white'
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
    <Box className="service-container-wrapper">
      <Box my={'6rem'} sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
        <img style={{height:'50px', width:'auto'}} src={logoResponsive} ></img>
        <Typography color={"#00448A"} fontWeight={'bold'}  variant="h3">인력파견 부문</Typography>
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
          <Typography className="service-text-title" variant="h4">{item.title}</Typography>
            <p className="service-text-content" >{item.content}</p>
          </Grid>
          <Grid sx={{imageGridStyle}} item xs={12} sm={6} md={6} key={item.id}>
            <img className="service-image" src={item.img}></img>
          </Grid>
        </>
      ) 
      :(<>
        <Grid direction={"column"} sx={textGridStyle} className={className}  item xs={12} sm={6} key={item.id}>
          <Typography className="service-text-title"  variant="h4">{item.title}</Typography>
          <p className="service-text-content">{item.content}</p>
        </Grid>
        <Grid d className={className} item xs={12} sm={6} md={6} key={item.id}>
          <img className="service-image" src={item.img}></img>
        </Grid>
        
      </>)
    )}
    </Grid>
  )
}
