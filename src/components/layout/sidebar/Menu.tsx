import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { menu } from './dataMenu'

const Menu: FC = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Card sx={{
        padding: 2,
        borderRadius: 3,
        backgroundColor: '#f1f7fa',
        marginTop: 5,
        marginBottom: 10
        }} variant='outlined'>
        <List> 
            {menu.map(item => (
                <ListItem key={item.link} disablePadding>
                    <ListItemButton onClick={() => navigate(item.link)}>
                    <ListItemIcon>
                        <item.icon />
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>

      </Card>
    </div>
  )
}

export default Menu