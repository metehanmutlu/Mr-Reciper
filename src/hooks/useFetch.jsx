import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(url)
            setLoading(false)
            setData(response.data)
        } catch (error) {
            console.log(error);
            setError(error.message)
            setLoading(false)
        }
    }

    return { data, loading, error }
}

export default useFetch