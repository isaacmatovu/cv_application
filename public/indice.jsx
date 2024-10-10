import { useState } from "react"


export function Calculator(){
    const [value,setValue] = useState('');

    function handleChange(e){
        setValue(e.target.value)
    }
    return (
        <>
<Input value={value} onChange={handleChange}/>
<Input value={value} onChange={handleChange}/>
</>
    )
}

function Input(props){
    return(
<input type="text" value={props.value} onChange={props.handleChange}/>
    )
}