import axios from "axios"
import { useEffect, useState } from "react"

const useFetchAllFavorites = (favorites) => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            let datas = [];
            for (const fav of favorites) {
                const response = await axios.get(URL + `${fav.id}`)
                if (response.data.meals) {
                    datas.push(...response.data.meals)
                }
            }
            setLoading(false)
            setData(datas)
        } catch (error) {
            console.log(error);
            setError(error.message)
            setLoading(false)
        }
    }

    return { data, loading, error }
}

export default useFetchAllFavorites