import React, {useState} from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

//вызываем ф-ию для App.js
const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    //мы не можем предавать пропсы из дочернего элемента к родительскому, работает только сверху вниз,
    //но мы можем это сделать с помощью callback функции, которая будет ожидать в родители и запишет в массив
    
    const addNewPost = (e) => {
        e.preventDefault()//страница не обновляется
        const newPost = {
            ...post, id: Date.now()
        } 
        create(newPost)
        //очищает инпуты после создания поста
      setPost({title: '', body: ''})
      }

    return (
        <form>
        {/* управляемый компонент */}
        <MyInput
        //связаваем value input с состоянием title
        value={post.title}
        //отслеживаем как пользователь вводит в input
        onChange={e => setPost({...post, title: e.target.value})}//передаем объект
        type="text" 
        placeholder='Название поста'
        />
        {/* неуправляемый/неконтролируемый компонент */}
        <MyInput 
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text" 
        placeholder='Описание поста'/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    )
}

export default PostForm