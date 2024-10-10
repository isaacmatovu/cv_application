
import {useState} from 'react'
//import '../styles/general.css';
import { Submitbtn } from './submitbtn';
import { Editbtn } from './edit.btn';
import'../styles/experience.css';

export function Educationexperience(){
   const [education,setEducation] = useState({schoolName:"",
    course:"",
    dateEnd:"",
   })
   const [editng ,setEditng] = useState(true)
  
    function changeSchoolname(e){
        setEducation({...education,schoolName:e.target.value})
    }
  
    function changeCourse(e){
        setEducation({...education,course:e.target.value})
    }

    function changeDate(e){
        setEducation({...education,dateEnd:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        setEditng(false)
    }
    function handleEdit(){
        setEditng(true)
    }

    return(
        <>
        {editng ? (
            <form  onSubmit={handleSubmit}>
            <div className='studentbio'>
                <h1 className='headertxt'>Generate your cv with Us</h1>
                        <h2 className='headertxt'>Educational experince</h2>
                        <label>Enter your schoolname
                        <input type="text" name='schoolName'value={education.schoolName} onChange={changeSchoolname}required/>
                        </label>
                        <label>Enter your course of study
                        <input type="text" name='course'value={education.course} onChange={changeCourse}required/>
                        </label>
                        <label>Enter date of end study
                        <input type="date" name='dateEnd' value={education.dateEnd}required onChange={changeDate}/>
                        </label>
                    <Submitbtn/>
                        </div>
                        
                    </form>) : (
                        <div className="studentinfo">
                            <div className="experience">
                            <div className="container">
                             <div className="itemlist">  <h2 className='para'>SchoolName:</h2> <p className='txt'>{education.schoolName}</p></div> 
                             <div className="itemlist">  <p className='para'>Course:</p> <p className='txt'>{education.course}</p></div> 
                             <div className="itemlist">  <p className='para'>Start Date:</p> <p className='txt'>{education.dateEnd}</p></div> 
                                <Editbtn handleEdit={handleEdit}/>
                            </div>
                            </div>
                        </div>
                    )}
                    
        </>

    )
}
