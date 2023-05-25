import { FC } from 'react'
import { useAuth } from '../../providers/useAuth'
import { Card, Avatar, Box } from '@mui/material';

const Profile:FC = () => {
  const {user} = useAuth();

  return (
    <Card>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center'
      }}>
        <Avatar src={user?.avatar} />
        <h1>{user?.name}</h1>
      </Box>
    </Card>
  )
}

export default Profile