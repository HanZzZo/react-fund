import React, { useEffect, useState } from "react"
//цепляем id из url и отправляем запрос на сервер для получения поста по id
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useFetching } from "../hooks/useFetching"
import PostService from "../API/PostService"
import Loader from "../components/UI/Loader/Loader"

const PostIdPage = () => {
    const params = useParams()
    //создаем стостояние, которое вернет сервер 
    const [post, setPost] = useState({})
    //полученные комментраии сохраняем в состоние
    const [comments, setComments] = useState([])
    //для отправки переиспользуемых компонентов
    const[fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data) //получли ответ от сервреа помещаем поле data в состояние
    })

    const[fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data) 
    })

    //на первую отрисовку компонента получаем данные с сервера 
    useEffect(() => {
        fetchPostById(params.id) //получаем из параметров в момент вызова 
        fetchComments(params.id)
    }, [])

    return (
        <div>
      <h1>Вы открыли страницу поста c ID = {params.id} </h1>
      {isLoading
       ? <Loader/>
       : <div>{post.id}. {post.title}</div>
    }
    <h1>
        Комментарии
    </h1>
    {isLoading
       ? <Loader/>
       : <div>{
           comments.map(comm => 
            <div style={{marginTop: 15}}> 
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
            </div>
            )
           }</div>
    }
      
    </div>
    )
}

export default PostIdPage