import axios from 'axios'
import { useEffect, useState } from 'react'
import { ONLINEBOOKS } from '../constants'

export default function useFetch(url){
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState(ONLINEBOOKS)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            try {
                const response = await axios(url).then(res => res)
                setData(response.data.items)
            } catch (error) {
                setError(error)
                console.log(error)
            }finally{
                setIsLoading(false)
            }
        }
        getData()
    }, [])
    return { isLoading, error, data }
}