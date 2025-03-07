import { useState } from "react"

function Log(props)
{
    const [Colour , setColour] = useState("Click the button below")
    function ClickMe(obj)
    {
        setColour("You clicked the button !")
    }
 return(
    <div>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <h2>{Colour}</h2>
        <button onClick={() => ClickMe(props.name)}>Click me!</button>
        <button onClick={() => props.delete(props.id)}>Delete</button>
    </div>
 )
}

export default Log