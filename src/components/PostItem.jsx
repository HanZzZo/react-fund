import React from 'react'
import MyButton from './UI/button/MyButton'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min' //позволяет переходить на другие страницы

const PostItem = (props) => {
  const router = useHistory()
    return (
        <div className='post'> 
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>
        {props.post.body}  
        </div>
      </div>
      <div className="post__btns">
      <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>{/*  //с помощью нее мы можем переходить на конкретную страницу без использования ссылок */}
          Открыть
        </MyButton>
        {/* передаем слушатель событий функцию remove(путь до PostItem передавали везде remove) */}
        <MyButton onClick={() => props.remove(props.post)}>
          Удалить
        </MyButton>
        </div>
    </div>
    )
}

export default PostItem 