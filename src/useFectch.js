import { useState , useEffect} from "react";
import BlogList from "./Blog-list";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const[error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() =>{
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch data')
                    }
                    return res.json()
                })
                .then(data =>  {
                    setData(data);
                    setIsLoading(false)
                    setError(null)
                })
                .catch((err) => {
                    setError(err.message);
                    setIsLoading(false)
                })
        }, 500)
    },[]);

    return{ data , isLoading , error}
}

export default useFetch;