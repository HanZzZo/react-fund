import React from 'react'
import PostItem from './PostItem'

const PostList = ({posts, title, remove}) => { //передаем props, но можем вытащить сразу нужное поле 
    return (
        //может быть только один корневой элемент 
       <div>
         <h1 style={{textAlign: 'center'}}>
         {title}
      </h1>
      {posts.map((post, index) =>
      //каждый элемент превращаем в реакт эл 
      //когда создаем списки обязательно надо указать ключ 
        <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
        )}
       </div>
    )
}

export default PostList