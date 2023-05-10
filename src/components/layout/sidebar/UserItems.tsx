import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { QuestionAnswer } from '@mui/icons-material'
import { Avatar, Box, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { users } from './dataUser'

const UserItems: FC = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Card sx={{
        padding: 2,
        borderRadius: 3,
        backgroundColor: '#f1f7fa'
        }} variant='outlined'>
        {users.map(user => (
          <Link key={user._id} to={`/profile/${user._id}`} style={{display: 'flex', alignItems: 'center', color: '#111', textDecoration: 'none', marginBottom: 12}}>
            <Box sx={{
              position: 'relative', 
              marginRight: 5, 
              borderRadius: '50%',
              width: 50, 
              height: 50
              }}>
              <Avatar src={user.avatar} alt='' sx={{width: 46, height: 46}} />
              {user.isOnline && 
                (
                  <Box sx={{
                    backgroundColor: '#4fb14f',
                    width: 13,
                    height: 13,
                    position: 'absolute',
                    bottom: 2,
                    right: 2,
                    border: '2px solid #f1f7fa',
                    borderRadius: '50%'
                    }}>
                  </Box>
                )
              }
            </Box>
            <span style={{fontSize: 14}}>{user.name}</span>
          </Link>
        ))}
        
        <List> 
          <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/messages')}>
                <ListItemIcon>
                  <QuestionAnswer />
                </ListItemIcon>
                <ListItemText primary='Сообщения' />
              </ListItemButton>
          </ListItem>
        </List>

      </Card>
    </div>
  )
}

export default UserItems