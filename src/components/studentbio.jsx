import { useState } from "react";
import { Submitbtn } from "./submitbtn";
import { Editbtn } from "./edit.btn";
import '../styles/experience.css'


export function UpdateStudentbio(){
    const [studentbio, setStudentbio] = useState({name:"",
        email:"",
        number:"",
    })
    const [editing, setediting] = useState(true);

    function handleName(e){
        setStudentbio({...studentbio,name:e.target.value})
    }
    function handleEmail(e){
        setStudentbio({...studentbio,email:e.target.value})
    }
    function handleNumber(e){
        setStudentbio({...studentbio,number:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        setediting(false)
    }

    function handledit(){
        setediting(true)
    }
    return(
        <>
        {editing ? (
        <form className='form' onSubmit={handleSubmit}>
        <label>Enter your name
        <input type="text" name='name' value={studentbio.name} onChange={handleName} required/>
        </label>
        <label>Enter your email
        <input type="email" name='email' value={studentbio.email} onChange={handleEmail} required/>
        </label>
        <label>Enter your number
        <input type="number" name='number' value={studentbio.number}required maxLength='8' onChange={handleNumber}/>
        </label>
        <Submitbtn />
        </form>) : (
            <div className="studentdata">
          <div className="experience">
           <div className="container">
           <div className="itemlist"><h1 className="para">Name:</h1><p className="txt">{studentbio.name}</p></div> 
           <div className="itemlist"><p className="para">Email:</p><p className="txt">{studentbio.email}</p></div> 
           <div className="itemlist"><p className="para">Tel:</p> <p className="txt">{studentbio.number}</p></div> 
            <Editbtn handleEdit={handledit}/>
           </div>
           </div>
            </div>
        )}
        </>
    )
}