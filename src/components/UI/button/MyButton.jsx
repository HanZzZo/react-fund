import React from 'react'
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        // весь объект разворачиваем в баттон, все пропсы которые будем передавать в MyButton будут улетать в эту кнопку
        //через components/MyBytton мы можем передавать в корневую кнопку  button
     <button {...props} className={classes.myBtn}> 
            {children}
        </button>
    )
}

export default MyButton