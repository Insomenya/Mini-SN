import { Box } from '@mui/material'
import React from 'react'

interface NodeChildren {
    children: React.ReactNode
}

const Card = ({children}: NodeChildren) => {
  return (
    <Box
    sx={{
        border: '1px solid #e2e2e2',
        borderRadius: '10px',
        padding: 2,
        marginTop: 4
    }}
    >
        {children}
    </Box>
  )
}

export default Card