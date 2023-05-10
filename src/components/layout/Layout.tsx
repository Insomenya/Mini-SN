import { Grid } from '@mui/material'
import React from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import { useAuth } from '../providers/useAuth'

interface NodeChildren {
    children: React.ReactNode
}

const Layout = ({children}: NodeChildren) => {
  const {user} = useAuth()

  return (
    <>
        <Header />
        <Grid container spacing={2} paddingX={5}>
          {user && (
            <Grid item md={2.5}>
              <Sidebar />
            </Grid>
          )}
          <Grid item md={user ? 9.5: 12}>
            {children}
          </Grid>
        </Grid>
    </>
  )
}

export default Layout