import { useEffect, useState } from "react"
import Log from "./INTRO"
import useFetch from "./Usefetch_method"
function App() {

  
  //SORTED(INCREASING ORDER) AND FILTERED (AGE<29)
  // data.sort((a,b) => a.age - b.age)
  // const filter = data.filter(FilterVar => FilterVar.age<29)

  function DeleteFunc(id)
  {
    const Filter = data.filter(Avoid => Avoid.id != id)
    setData(Filter)
  }

  const [data,error] =  useFetch("http://localhost:3000/data")
  if(!data )
    {
      if(error)
      {
        return(<p>Something went Wrong ☹️ {error}</p>)
      }
      return(<p>Loading...</p>)
    }     

  
  const ListItems = data.map(getItems => <Log key={getItems.id}  name = {getItems.name} age = {getItems.age} delete = {DeleteFunc} id = {getItems.id}/>)




  return (
    <>
    {ListItems}
    <button onClick={()=> setSmall(true)}>Change</button>
    <br/>
    </>
  )
}

export default App



//npx json-server --watch react-app/data/dummy.json --port 3000 --static ./react-app/data