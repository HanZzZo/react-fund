import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = (props) => {
    return (
        <div className='post'> 
      <div className="post__content">
        <strong>{props.number}. {props.post.title}</strong>
        <div>
        {props.post.body}  
        </div>
      </div>
      <div className="post__btns">
        {/* передаем слушатель событий функцию remove(путь до PostItem передавали везде remove) */}
        <MyButton onClick={() => props.remove(props.post)}>
          delete
        </MyButton>
        </div>
    </div>
    )
}

export default PostItem 