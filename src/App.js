import React from 'react';
import './App.css';
import PostForm from './component/PostForm';
import PostList from './component/PostList';
import Selector from './component/UI/Selector';


function App() {

  const [posts, setPosts] = React.useState([])

  const [selectedSort, setSelectedSort] = React.useState("")

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="app">
      <PostForm create={createPost} />
      <Selector value={selectedSort} onChange={sortPosts} options={[{ value: "tittle", name: "по описанию" }, { value: "body", name: "по названию" }]} defoultValue="сортировка" />
      {posts.length === 0
        ? <h1>Записей нет</h1>
        : <PostList delet={removePost} posts={posts} />
      }
    </div>
  );
}

export default App;
