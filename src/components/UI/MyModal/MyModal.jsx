import React from "react"
import cl from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => { //делаем так чтобы мы могли добавлять в модальное окно 
   //visible - отвечает за видимость 
   //setVisible - будет скрывать модальное окно, если нажмем на темную область

   const rootClasses = [cl.myModal]
    if(visible === true) {
        rootClasses.push(cl.active)
    }
   
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            {/* когда нажимаем на контент модальное окно закрывается предотвращаем так */}
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>

    )
}

export default MyModal