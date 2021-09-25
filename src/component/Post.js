import React from 'react'
import './Post.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const Post = (props) => {

   return (
      <div className="wrapper">
         <div className="strong">
            <strong>{props.post.tittle}</strong>
            <div
               className="text1">{props.post.body}
            </div>
         </div>
         <Button style={{ borderRadius: 10 }} type="primary" danger onClick={() => props.delet(props.post)}>Удалить</Button>
      </div>
   )
}




export default Post
