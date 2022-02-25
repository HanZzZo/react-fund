import { useState } from "react"

export const useFetching = (callback) => { //перед каким-то запросом кртилку показать поотм скрыть
    const [isLoading, setIsLoading] = useState(false)
    //для обработки ошибок
    const [error, setError] = useState('')
    const fetching = async (...args) => { //необходимо принять аргументы и передать в колбэк
        try {
            setIsLoading(true) 
            await callback(...args)
        } catch (e) {
            setError(e.massage)
        } finally {
            setIsLoading(false)
        }
    }
return[fetching, isLoading, error]
}