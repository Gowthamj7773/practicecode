import { useContext , createContext } from "react"
import { dataContext } from "./homepage"
function Page2()
{
    const data = useContext(dataContext)
    return(<>
    <h2>Page2</h2>
    <h4>{data}</h4>
    </>)
}
export default Page2