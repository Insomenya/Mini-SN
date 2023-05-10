import { FC } from 'react'
import { IPost } from '../../../types'
import { Avatar, Box, Divider, ImageList, ImageListItem } from '@mui/material'
import { Link } from 'react-router-dom'

interface IPosts {
    posts: IPost[]
}

const Posts: FC<IPosts> = ({posts}) => {
  return (
    <>
        {posts.map((post, index) => (
            <Box key={`Post-${index}`} sx={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: 2,
                marginTop: 5,
                marginBottom: 2
            }}>
                <Link key={post.author._id} to={`/profile/${post.author._id}`} style={{display: 'flex', alignItems: 'center', color: '#111', textDecoration: 'none', marginBottom: 12}}>
                    <Box sx={{
                        position: 'relative', 
                        marginRight: 5, 
                        borderRadius: '50%',
                        width: 50, 
                        height: 50
                        }}>
                        <Avatar src={post.author.avatar} alt='' sx={{width: 46, height: 46}} />
                    </Box>

                    <div>
                        <div style={{fontSize: 14}}>{post.author.name}</div>
                        <div style={{fontSize: 14, opacity: '0.6'}}>{post.createdAt}</div>
                    </div>
                </Link>
                <Divider />
                <Box sx={{padding: 1}}>
                    {post.content}

                    {post.images?.length && (
                        <ImageList variant='masonry' cols={3} gap={8}>
                            {post.images.map(image => (
                                <ImageListItem key={image}>
                                    <img 
                                    src={image} 
                                    alt={''} 
                                    loading='lazy'
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    )}
                </Box>
            </Box>
        ))}
    </>
  )
}

export default Posts