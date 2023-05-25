import React, { FC, useState } from 'react'
import { Box } from '@mui/material'
import AddPost from './AddPost'
import { IPost } from '../../../types'
import Posts from './Posts'
import { initialPosts } from './initialPosts'

const Home: FC = () => {

  const [posts, setPosts] = useState<IPost[]>(initialPosts)

  return (
    <div>
        <Box>
          <AddPost setPosts={setPosts} />
          <Posts />
        </Box>
    </div>
  )
}

export default Home