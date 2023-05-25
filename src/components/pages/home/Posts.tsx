import { FC, useState, useEffect } from 'react'
import { IPost } from '../../../types'
import { Avatar, Box, Divider, ImageList, ImageListItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuth } from '../../providers/useAuth'
import { onSnapshot, doc, collection } from 'firebase/firestore'
import { initialPosts } from './initialPosts'
import Card from '../../ui/Card'


const Posts: FC = () => {
    const {db} = useAuth();
    const [error, setError] = useState('');
    const [posts, setPosts] = useState<IPost[]>(initialPosts)

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'posts'), doc => {
            setPosts([]);

            doc.forEach((d: any) => {
                setPosts(prev => [...prev, d.data()])
            });
        })

        return () => {
            unsub()
        }
    }, []);

  return (
    <>
        {posts.map((post, index) => (
            <Card key={`Post-${index}`}>
                <Link key={post.author._id} to={`/profile`} style={{display: 'flex', alignItems: 'center', color: '#111', textDecoration: 'none', marginBottom: 12}}>
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
            </Card>
        ))}
    </>
  )
}

export default Posts