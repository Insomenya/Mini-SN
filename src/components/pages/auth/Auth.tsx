import { Alert, Button, ButtonGroup, Grid, Paper, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import { IUserData } from './types'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useAuth } from '../../providers/useAuth'
import { useNavigate } from 'react-router-dom'
 
const Auth:FC = () => {
  const { ga, user } = useAuth()

  const [isRegForm, setIsRegForm] = useState(true);

  const [userData, setUserData] = useState<IUserData>({
    email: '',
    password: ''
  } as IUserData)

  const [error, setError] = useState<string>('')

  const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isRegForm) {
      try {
        await createUserWithEmailAndPassword(ga, userData.email, userData.password)

        setError('')
      } catch (error: any) {
        error.message && setError(error.message)
      }
    } else {
      try {
        await signInWithEmailAndPassword(ga, userData.email, userData.password)

        setError('')
      } catch (error: any) {
        error.message && setError(error.message)
      }
    }
    
    setUserData({
      email: '',
      password: ''
    })
  }

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  return (
    <>
      {error && <Alert severity='error' sx={{marginBottom: 2}}>{error}</Alert>}
      <Paper variant='outlined' sx={{maxWidth: '400px', padding: '20px 40px', borderRadius: '10px'}}>
        <Typography textAlign='center' variant='h5' gutterBottom>
          Форма Авторизации
        </Typography>
        <Grid display='flex' justifyContent='center' alignItems='center'>
          <form onSubmit={handleLogin}>
            <TextField 
            required
            type='email' 
            label='Email' 
            variant='outlined' 
            value={userData.email} 
            onChange={e => setUserData({...userData, email: e.target.value})}
            InputProps={{
              sx: {width: '100%'}
            }}
            sx={{display: 'block', marginBottom: 2}}
            />
            <TextField 
            required
            type='password' 
            label='Пароль' 
            variant='outlined' 
            value={userData.password} 
            onChange={e => setUserData({...userData, password: e.target.value})}
            InputProps={{
              sx: {width: '100%'}
            }}
            sx={{display: 'block', marginBottom: 2}}
            />
            <ToggleButtonGroup color='primary' value={isRegForm} exclusive onChange={() => setIsRegForm(!isRegForm)}>
              <ToggleButton value={false}>Войти</ToggleButton>
              <ToggleButton value={true}>Зарегистрироваться</ToggleButton>
            </ToggleButtonGroup>
            <ButtonGroup sx={{display: 'block', marginTop: 2}}>
              <Button variant='contained' sx={{width: '100%'}} type='submit'>Продолжить</Button>
            </ButtonGroup>
          </form>
        </Grid>
      </Paper>
    </>
  )
}

export default Auth