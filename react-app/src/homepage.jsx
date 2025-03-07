import {Link} from 'react-router-dom'
import { createContext } from 'react'
import Page2 from './page2'

export const dataContext = createContext()
function Home() 
{
    const data = "Meta Data"
    return(<>
    <h2>Home</h2>
    <button><Link to="/content">CONTENT</Link></button>
    <dataContext.Provider value={data}>
        <Page2/>
    </dataContext.Provider>
    </>
)
}

export default Home