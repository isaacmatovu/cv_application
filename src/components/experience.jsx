import { useState } from "react";
import { Submitbtn } from "./submitbtn";
import { Editbtn } from "./edit.btn";
import '../styles/experience.css';

export function PracticalExperience(){

    const [practicalexp,setpracticalexp]=useState({companyName:"",
      title:"",
      responsibilities:"",
      startDate:"",
      endDate:"",
    })
    const [editing,setediting] = useState(true)

    function changeCompanyname(e){
        setpracticalexp({...practicalexp, companyName:e.target.value})
    }
    function changePosition(e){
        setpracticalexp({...practicalexp,title:e.target.value})
    }
    function changeResponsibilities(e){
        setpracticalexp({...practicalexp,responsibilities:e.target.value})
    }
    function changeStartdate(e){
        setpracticalexp({...practicalexp,startDate:e.target.value})
    }
    function changeEndDate(e){
        setpracticalexp({...practicalexp,endDate:e.target.value})
    }

    function handleSubmit(e){
      e.preventDefault();
      setediting(false)
    }

    function handleEdit(){
        setediting(true)
    }

    return (
        <>
        {editing ? (
        <form onSubmit={handleSubmit}>
            <h3 className="headertxt">Practical experience</h3>
                        <label>Enter your company name
                        <input type="text" name='companyName'value={practicalexp.companyName} onChange={changeCompanyname}required/>
                        </label>
                        <label>Enter position title
                        <input type="text" name='title' value={practicalexp.title} onChange={changePosition}required/>
                        </label>
                        <label>Enter main responsibilities
                        <textarea name='responsibilities' value={practicalexp.responsibilities} onChange={changeResponsibilities}required/>
                        </label>
                        <label>Enter start date
                        <input type="date" name='startDate' value={practicalexp.startDate} onChange={changeStartdate} required/>
                        </label>
                        <label>Enter end date
                        <input type="date" name='endDate' value={practicalexp.endDate} onChange={changeEndDate}required/>
                        </label>
                         <Submitbtn/>
                        </form>) : (
                            <div className="experience">
                                <div className="container">
                                <div className="itemlist"> <h2 className="para">CompanyName:</h2><p className="txt">{practicalexp.companyName}</p></div>
                                  <div className="itemlist"> <p className="para">Postion:</p><p className="txt">{practicalexp.title}</p></div> 
                                   <div className="itemlist"><p className="para">Responsibilities:</p><p className="txt">{practicalexp.responsibilities}</p></div> 
                                  <div className="itemlist"> <p className="para">Start Date of work:</p><p className="txt">{practicalexp.startDate}</p></div> 
                                   <div className="itemlist"><p className="para">End Date of work:</p><p className="txt">{practicalexp.endDate}</p></div> 
                                   <Editbtn handleEdit={handleEdit}/>
                                </div>
                            </div>
                        )}
        </>
    )

}