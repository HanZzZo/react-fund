import React, { useState, useMemo } from 'react'; //реакт импортируем в каждый файл где создаем компанент 
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

function App() {
  const [posts, setPosts] = useState([ //массив с состоянием постов
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'vdfv', body: 'jnnrg'},
    {id: 3, title: 'gbdfvb', body: 'nhgg'}
  ])
 
  const [filter, setFilter] = useState({sort: '', query: ''}) //содержит алгоритм сортировки и поисковая строка
  //состояние которое отвечает за видимость окна и за то чтобы мы могли динамически управлять(показываьт при нажатии на кнопку)
  const [modal, setModal] = useState(false) 

  const sortedPosts = useMemo(() => {
    console.log('Отработала функция сортед');
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
     }
     return posts
  }, [filter.sort, posts])//callback будет вызван только тогда, когда если какая-то зависимость в массиве поменят свое значение

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase())) //поиск 
  }, [filter.query, sortedPosts]) //отсортированный и поиск

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
//когда пользователь выбрал алгоритм сортировки необходимо массив отсортировать

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
      {/* условная отрисовка, если все посты удалили */}
          <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
    </div>
  );
}

export default App;
