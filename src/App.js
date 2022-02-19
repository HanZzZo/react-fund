import React, { useState, useRef } from 'react'; //реакт импортируем в каждый файл где создаем компанент 
import Counter from './components/Counter'
import ClassCounter from './components/classComponents';
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';


function App() {
  const [posts, setPosts] = useState([ //массив с состоянием постов
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ])
  //реализовываем двусторонние связывание для MySelect
  const [selectedSort, setSelectedSort] = useState('')
  //callback ожидает на входе новый созданный пост его будем пердавать в компоненте PostForm
  const createPost = (newPost) => {
    //здесь мы только изменяем состояние
    setPosts([...posts, newPost])
  }
// получаем post из дочернего компонента
const removePost = (post) => {
  //надо удалить пост, который мы предали аргументам
  setPosts(posts.filter(p => p.id !== post.id))
}
//когда пользователь выбрал алгоритм сортировки необходимо массив отсортировать
  const sortPosts = (sort) => {
    // вызываем ф-ию setSelectedSort и передавать то что приходит из самого селекта(сразу та опция, которую выбрал пользователь)\
    setSelectedSort(sort)
    //вызываем ф-ию setPosts чтобы передать отсортированный массив
    //ф-ию sort не возвращает новый отсортированный массив, а мутирует тот массив к которому эта ф-ию была применена
    //поэтому мы развернем посты в новый массив и отсортируем уже этот массив(мутирем копию массив)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))//localeCompare- нужна для сравнения строк чаще используется при сортировке 

  }

  return (
    <div className="App">
      {/* передаем callback */}
      <PostForm create={createPost}/>
       <hr style={{margin: '15px 0'}}/>
      <div>
        
          {/* сортировка */}
          <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка по"
          options={[
            {value: 'title', name: 'По названию '},
            {value: 'body', name: 'По описанию '},
          ]}
          />
      </div>
      {/* условная отрисовка, если все посты удалили */}
      {posts.length 
          ? 
          <PostList remove={removePost} posts={posts} title="Посты про JS"/>
          : 
          <h1 style={{textAlign: 'center'}}>
            Посты не найдены
           </h1>
      
      }
     
    </div>
  );
}

export default App;
