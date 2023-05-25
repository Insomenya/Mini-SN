import React, { FC, useState } from 'react'
import { Box, TextField } from '@mui/material'
import { IPost, TypeSetState } from '../../../types'
import { users } from '../../layout/sidebar/dataUser'
import { addDoc, collection } from 'firebase/firestore'
import { useAuth } from '../../providers/useAuth'

interface IAddPost {
    setPosts: TypeSetState<IPost[]>
}

const AddPost: FC<IAddPost> = ({setPosts}) => {

    const [content, setContent] = useState<string>('')
    const {user, db} = useAuth();
    const [error, setError] = useState('');

    const addPostHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            try {
                const docRef = await addDoc(collection(db, 'posts'), {
                    author: user, 
                    content,
                    createdAt: new Date().toLocaleString()
                })
            } catch (e: any) {
                setError(e);
            }

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