import { Box, Typography, Button, IconButton, Checkbox } from '@mui/material'
import React, { useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './ContactForm.css'
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import { useSnackbar } from 'notistack';
import { closeDrawer, googleSheetEndpoint3, hideBodyOverflow, removeQueryData } from '../utils/utils';

let textFieldStyle={
    width:'100%',
}
export default function ContactForm({formIsOpen, closeForm, isOpen, openPrivacy}) {
    
   
    
    const { enqueueSnackbar } = useSnackbar();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [emailError, setEmailError] = React.useState(false);
    const [phoneError, setPhoneError] = React.useState(false);

    const handleClickVariant = (variant) => {

        enqueueSnackbar((variant === "success")
        ?"접수가 완료되었습니다. 감사합니다."
        :"접수에 실패했습니다. 다시 시도해주세요.", { variant });
      };

      useEffect(() => {
        hideBodyOverflow(formIsOpen)
        closeDrawer(isOpen)
      }, [formIsOpen])
    function handleSubmit(e)
    {   
        const formElement = document.getElementById('form');
        e.preventDefault();
        if(email.length < 1)
        {
            setEmailError(true);
            return;
        }
        if(phoneNumber.length < 1)
        {
            setPhoneError(true);
            return;
        }
        const formData = new FormData(formElement);


        fetch(googleSheetEndpoint3, {
            method: 'POST',
            body: formData,
        })
        .then((res) => {
            handleClickVariant('success');            
        }).catch((error) => {
            console.error('Error:', error);
            handleClickVariant('error');
        });
        closeForm()
        removeQueryData();
        
    }

  return (
    formIsOpen && (
    <Box sx={{ paddingTop:'1rem', position:"fixed", height:'100vh', width:'100vw', bgcolor:'white', zIndex:'30000', display:'flex', alignItems:'center', flexDirection:'column'}} className="contact-form-container">
        <IconButton 
        sx={{
            position:{xs:'static', md:'absolute'}, 
            width:'40px', 
            top:'5%', 
            right:'5%', 
            height:'40px', 
            backgroundColor:'white',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:'1rem'
        }}
        size='small'
        variant="contained" 
        label="close"
        onClick={closeForm}
        >
            <CloseIcon id='close-icon' sx={{color:'black'}}/>
        </IconButton>
        <Box>
            <Typography variant="h4" color="text.tertiary" sx={{textAlign:'center', margin:'1rem 0rem 3rem 0rem' }}>서비스의뢰</Typography>
        </Box>
        <Box className="form-container" sx={{width:{xs:'90%', md:'50%'}}}>
        <form id="form" style={{width:'100%', maxWidth:'100%'}} autoComplete="on" onSubmit={handleSubmit}>
            <FormControl>
                <TextField 
                    label="이름"
                    placeholder='이름을 입력해주세요'
                    onChange={e => setName(e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    size='small'
                    type="name"
                    name="name"
                    sx={{...textFieldStyle,mb: 3}}
                    fullWidth
                    defaultValue={name}
                 />
                 <TextField 
                    label="이메일 주소"
                    placeholder='이메일 주소을 입력해주세요'
                    onChange={e => setEmail(e.target.value)}
                    required
                    name="email"
                    variant="outlined"
                    color="primary"
                    size='small'
                    type="email"
                    value={email}
                    error={emailError}
                    helperText="접수하신 내용에 대해 별도 안내가 필요한 경우 해당 이메일 주소로 회신을 드립니다."
                    fullWidth
                    sx={{mb: 3, color:'black'}}
                 />
                 <TextField 
                    label="전화번호"
                    placeholder='전화번호를 입력해주세요'
                    onChange={e => setPhoneNumber(e.target.value)}
                    required
                    name='phoneNumber'
                    variant="outlined"
                    color="primary"
                    size='small'
                    type="phone"
                    value={phoneNumber}
                    error={phoneError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    name='message'
                    label="문의 사항"
                    onChange={e => setMessage(e.target.value)}
                    multiline
                    rows={6}
                    required
                    variant="outlined"
                    color="primary"
                    size='small'
                    type="text"
                    value={message}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <Checkbox required/>
                    <p style={{fontSize:'10px'}}><span href="#" style={{cursor:"pointer", color:'#00448A', fontWeight:'800', textDecoration:'underline'}} onClick={openPrivacy}>개인정보 처리방침</span>에 동의합니다.</p>
                </Box>
                 <Button sx={{bagcolor:'#00448A'}} variant="contained" type="submit">접수</Button>
            </FormControl>
        </form>
        </Box>
    </Box>)
  )
}
