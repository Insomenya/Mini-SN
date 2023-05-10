import { LogoDevSharp } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputBase, Paper, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { FC } from 'react'
import { useAuth } from '../../providers/useAuth'

const Header:FC = () => {
  const {user} = useAuth()

  return (
    <Paper
      sx={{
        display: 'flex',
        padding: '10px 40px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 3
      }}
    >
      <Link to={user? '/' : '/auth'} style={{textDecoration: 'none'}}>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <LogoDevSharp fontSize='large' color='primary' />
        <Typography variant='h6' marginLeft={1} component='div'>
          <Box sx={{color: '#000'}}>Mini-SN</Box>
        </Typography>
      </Box>
      </Link>
      <Paper
        variant='outlined'
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Поиск по постам"
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Paper>
  )
}

export default Header