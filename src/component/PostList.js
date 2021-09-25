import React from 'react'
import Post from './Post';

const PostList = ({ posts, tittle, delet }) => {

   return (
      <div>
         <h1>{tittle}</h1>
         {posts.map(post =>
            <Post delet={delet} post={post} key={post.id} />)}
      </div>
   )
}

export default PostList
