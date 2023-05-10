import React, { FC } from 'react'
import { Avatar, Button, Card, Chip } from '@mui/material'
import { useAuth } from '../../providers/useAuth'
import { signOut } from 'firebase/auth'

const User: FC = () => {
    const {user, ga} = useAuth()

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
        <Button variant='outlined' onClick={() => signOut(ga)} sx={{height: '30px'}} >Выйти</Button>
    </Card>
  )
}

export default User