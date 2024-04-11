import * as React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Box, Typography } from '@mui/material'


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
        navButtonsAlwaysInvisible={true} sx={{maxHeight:'100vh', width:'100vw'}} indicators={true} interval={4000} 
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
        <Paper sx={{width:'100vw', height:'100vh'}}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                bgcolor: 'rgba(0, 0, 0, 0.7)'
            }} /> 
            <img className="my-carousel-root" src ={item.link} alt={item.name} />
            <Box className = "my-carousel-root-text" sx={{
                position: 'absolute',
                top: '0%',
                left: '0%',
                width: '80%',
                height:'80%',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'left',
                color: 'white',
                textAlign:'justify',
                padding:'0 3rem'}}>

                <Typography className='carousel-text' variant="h3" color="text.secondary" sx={{color:'white'}}>
                    {item.title}
                    </Typography>
                    <br/><br/><br/>
                <Typography className='carousel-text' variant="h5" color="text.secondary" sx={{
                }}>
                    {item.content}
                </Typography>
            </Box>
        </Paper>
    )
}

export {CustomCarousel}