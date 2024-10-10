import { useState } from 'react';

export function Practise(){
    const [person, setPerson] = useState({name: "john", age:31})
    const [to,isSet] = useState('alice');
    const[message,setMessage] = useState('hello')

    function hangePerson(){
   const neewPerson = {...person,age:person.age + 1}

   setPerson(neewPerson)
    }

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(()=>{
        alert(`you said${message} to ${to}`)
        },3000)
    }
return( 
<div>
<button onClick={hangePerson}>change age</button>
<p>{person.name} {person.age}</p>

<form onSubmit={handleSubmit}>
    <label>
        to{''}
        <select value={to} onChange={e => isSet(e.target.value)}>
            <option value='alice'>alice</option>
            <option value='bob'>bob</option> 
            </select>
    </label>
    <textarea placeholder='message' value={message} onChange={e=>setMessage(e.target.value)} />

    <button type='submit'>send</button>
</form>
</div>
)}