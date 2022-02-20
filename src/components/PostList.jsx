import React from 'react'
import PostItem from './PostItem'
import {TransitionGroup, CSSTransition} from "react-transition-group"

const PostList = ({posts, title, remove}) => { //передаем props, но можем вытащить сразу нужное поле 
    if(!posts.length) {
      return (
        <h1 style={{textAlign: 'center'}}>
            Посты не найдены
           </h1>
      )
    }
  return (
        //может быть только один корневой элемент 
       <div>
         <h1 style={{textAlign: 'center'}}>
         {title}
      </h1>
      <TransitionGroup>
      {posts.map((post, index) =>
        <CSSTransition
          key={post.id}
          timeout={500}
          classNames="post"
        >
      {/* //каждый элемент превращаем в реакт эл 
      //когда создаем списки обязательно надо указать ключ  */}
        <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
        </CSSTransition>
        )}
      </TransitionGroup>
      
       </div>
    )
}

export default PostList