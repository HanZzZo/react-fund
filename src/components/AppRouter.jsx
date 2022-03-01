import React from 'react' 

const AppRouter = () => {
    return(
    <div>
       {/* решаем проблему с несуществующим url. Switch - позволяет группировать маршруты и выбрать хотя бы один из техкоторые есть внутри. Если ни один не отработалделаем общий случац*/}
    <Switch>
       <Route path="/about"> <About/> </Route>
       <Route path="/posts"> <Posts/> </Route>
       <Route path="/error"> <Error/> </Route>
       <Redirect to="/error"/> 
    </Switch>
    </div>
    )
}

export default AppRouter