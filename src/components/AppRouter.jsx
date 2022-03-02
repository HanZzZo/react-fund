import React from 'react' 
import {  Route,  Switch, Redirect } from 'react-router-dom'
import About from './../pages/About'
import Posts from './../pages/Posts'
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage'

const AppRouter = () => {
    return(
    <div>
       {/* решаем проблему с несуществующим url. Switch - позволяет группировать маршруты и выбрать хотя бы один из техкоторые есть внутри. Если ни один не отработалделаем общий случац*/}
    <Switch>
       <Route path="/about"> <About/> </Route>
       <Route exact path="/posts"> <Posts/> </Route>
       <Route exact path="/posts/:id"> <PostIdPage/> </Route> {/* чтоб роутер воспринимал путь как разные добовляем exact */}
       <Redirect to="/posts"/> 
    </Switch>
    </div>
    )
}

export default AppRouter