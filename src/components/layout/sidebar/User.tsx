import React, { FC } from 'react'
import { Avatar, Button, Card, Chip } from '@mui/material'
import { useAuth } from '../../providers/useAuth'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const User: FC = () => {
    const {user, ga} = useAuth()
    const navigate = useNavigate();

  return (
    <Card sx={{
        padding: 2,
        borderRadius: 3,
        backgroundColor: '#f1f7fa',
        marginBottom: 4
        }} variant='outlined'>
        <Chip
            avatar={<Avatar alt='' src={user?.avatar}></Avatar>}
            label={user?.name || 'Без имени'}
            variant='outlined'
            sx={{marginRight: 1}}
        />
        <Button variant='outlined' onClick={() => { navigate('/auth'); return signOut(ga); }} sx={{height: '30px'}} >Выйти</Button>
    </Card>
  )
}

export default User