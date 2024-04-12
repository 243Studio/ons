import * as React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Box, Typography } from '@mui/material'
import artsyLine from '../assets/img/icons/artsyline.png'

function CustomCarousel({items})
{    
    return (
        <Carousel 
        
        indicatorContainerProps={{
            style: {
                position:'absolute',
                zIndex: '100',
                top:'92%',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
            }
        }}
        activeIndicatorIconButtonProps={{
            style: {
                borderRadius:'0.5rem',
                padding:'0 10px',
                backgroundColor: 'white' // 2
            }
        }}
        indicatorIconButtonProps={{
            style: {
                color: 'white',
                margin: '0 3px'       // 3
            }
        }}
        navButtonsAlwaysInvisible={true} sx={{maxHeight:{xs:'100vh', md:'100vh'}, width:'100vw'}} indicators={true} interval={4000} 
        >
            {
                items.map( (itemName) => <Item  key={itemName} item={itemName} />)
            }
        </Carousel>
    )
}


function Item({item})
{
    return (
        <Paper sx={{width:'100vw', height:{sx:'100vh', md:'100vh'}}}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                bgcolor: 'rgba(0, 0, 0, 0.8)'
            }} /> 
            <img className="my-carousel-root" src ={item.link} alt={item.name} />
            <Box className = "my-carousel-root-text" sx={{
                position: 'absolute',
                top: '0%',
                left: '0%',
                width: {xs:'85%', md:'60%'},
                height:'60vh',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'left',
                color: 'white',
                textAlign:'justify',
                padding:{xs:'4.5rem 0rem 0rem 2rem', md:'3rem 0rem 0rem 8rem'}}}>

                <Typography className='carousel-text' variant="h3" color="text.secondary" sx={{color:'white', fontWeight:'bold',width: {xs:'100%', md:'100%'}}}>
                    {item.title}
                    </Typography>
                    <br/>
                    <img src={artsyLine} alt="artsy line" style={{width:'250px', height:'auto'}}/>
                    <br/>
                    <br/>
                <Typography 
                    className='carousel-text' 
                    variant="h5" 
                    color="text.white" 
                    sx={{ width:{
                            xs:'100%',
                            md:'80%'
                        }
                }}>
                    {item.content}
                </Typography>
            </Box>
        </Paper>
    )
}

export {CustomCarousel}