import { useState } from "react"

export const useFetching = (callback) => { //перед каким-то запросом кртилку показать поотм скрыть
    const [isLoading, setIsLoading] = useState(false)
    //для обработки ошибок
    const [error, setError] = useState('')
    const fetching = async () => {
        try {
            setIsLoading(true) 
            await callback()
        } catch (e) {
            setError(e.massage)
        } finally {
            setIsLoading(false)
        }
    }
return[fetching, isLoading, error]
}