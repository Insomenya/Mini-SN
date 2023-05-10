import React, { FC, useState } from 'react'
import { Box } from '@mui/material'
import AddPost from './AddPost'
import { IPost } from '../../../types'
import Posts from './Posts'
import { initialPost } from './initialPosts'

const Home: FC = () => {

  const [posts, setPosts] = useState<IPost[]>(initialPost)

  return (
    <div>
        <Box>
          <AddPost setPosts={setPosts} />
          <Posts posts={posts} />
        </Box>
    </div>
  )
}

export default Home