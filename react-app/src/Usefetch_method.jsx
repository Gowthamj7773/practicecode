import { useEffect, useState } from "react"

const useFetch = (url)=>{
    const [data , setData] = useState(null)
    const [error , setError] = useState(null)

    useEffect(() =>
        {
        setTimeout(()=>{
        fetch(url)

        .then(response => {
        console.log(response); 
        return response.json();
        })
        .then(datum => setData(datum))

        .catch(mistake => {
        console.log(mistake.message);
        console.error("Fetch Error: ",mistake.error);
        setError(mistake.message);
        })
},1000)
        },[])

        return [data,error];
}

export default useFetch