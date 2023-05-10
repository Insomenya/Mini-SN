import React, { FC, useState } from 'react'
import { Box, TextField } from '@mui/material'
import { IPost, TypeSetState } from '../../../types'
import { users } from '../../layout/sidebar/dataUser'

interface IAddPost {
    setPosts: TypeSetState<IPost[]>
}

const AddPost: FC<IAddPost> = ({setPosts}) => {

    const [content, setContent] = useState<string>('')

    const addPostHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setPosts(prev => [
                {
                    author: users[0],
                    content,
                    createdAt: '5 минут назад',
                },
                ...prev
            ])

            setContent('')
        }
    }

  return (
    <div>
        <Box sx={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: 2
        }}>
            <TextField 
                label='Расскажи что у тебя нового' 
                variant='outlined'
                InputProps={{
                    sx: {borderRadius: '15px', backgroundColor: '#f9f9f9'},
                }}
                sx={{width: '100%'}}
                onKeyPress={addPostHandler}
                onChange={e => setContent(e.target.value)}
                value={content}
             />
        </Box>
    </div>
  )
}

export default AddPost