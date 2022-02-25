import React, { useState, useEffect  } from 'react'; //реакт импортируем в каждый файл где создаем компанент 
import Counter from './components/Counter'
import ClassCounter from './components/classComponents';
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import {usePosts} from './hooks/usePosts';
import axios from 'axios';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import {getPageCount, getPagesArray} from './utils/pages'
import Pagination from './components/UI/pagination/Pagination';



function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''}) //содержит алгоритм сортировки и поисковая строка
  //состояние которое отвечает за видимость окна и за то чтобы мы могли динамически управлять(показываьт при нажатии на кнопку)
  const [modal, setModal] = useState(false) 
  //состояние где общее количество постов
  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  //собственный хук
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  
  //хук который предоставляет обработку индикация загрузки и обработку ошибоки какого-то запроса на получение данных
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
   const totalCount = response.headers['x-total-count']
    //после того как получили ответ от сервера обращаемся к хедерам и достам x-total-count
    setTotalPage(getPageCount(totalCount, limit))
  })


useEffect(() => {
  fetchPosts(limit, page)
}, [])

  //callback ожидает на входе новый созданный пост его будем пердавать в компоненте PostForm
  const createPost = (newPost) => {
    //здесь мы только изменяем состояние
    setPosts([...posts, newPost])
    setModal(false) //скрывет модальное окно
  }


// получаем post из дочернего компонента
const removePost = (post) => {
  //надо удалить пост, который мы предали аргументам
  setPosts(posts.filter(p => p.id !== post.id))
}


//создадим функция, которая будет изменять номер старницы и с измененым номером подгружать новую порцию данных
const changePage = (page) => {
  setPage(page)
  fetchPosts(limit, page)
}

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      {/* передаем callback */}
      <PostForm create={createPost}/>
      </MyModal>
       <hr style={{margin: '15px 0'}}/>
       <PostFilter 
       filter={filter}
       setFilter={setFilter}
       />
       {postError && 
          <h1>Произошла ошибка ${postError}</h1>
       }
       {isPostsLoading
          ?  <div style={{display:'flex', justifyContent: 'center', marginTop: "50px"}}> <Loader/> </div>
          : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
       } 
       <Pagination 
       page={page} 
       changePage={changePage} 
       totalPage={totalPage}/>
    </div>
  );
}

export default App;
