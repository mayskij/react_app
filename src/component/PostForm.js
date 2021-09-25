import React from 'react'
import MyButton from './UI/MyButton'
import MyInput from './UI/MyInput'
import "./PostForm.css"
import { Input } from 'antd';

const PostForm = ({ create }) => {

   const [post, setPost] = React.useState({ tittle: "", body: "" })

   const addClick = (e) => {
      e.preventDefault()
      const newPost = {
         ...post, id: Date.now()
      }
      create(newPost)
      setPost({ tittle: "", body: "" })
   }
   return (
      <form className="form_name">
         <Input
            className="input_one"
            onChange={(e) => setPost({ ...post, tittle: e.target.value })}
            value={post.tittle}
            type="text"
            placeholder="Название" />
         <MyInput
            className="input_two"
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            value={post.body}
            type="text"
            placeholder="Описание" />
         <MyButton onClick={addClick}>Добавить</MyButton>
      </form>
   )
}

export default PostForm
