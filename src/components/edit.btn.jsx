
import '../styles/editbtn.css'
export function Editbtn(props){

    
    
    return(
        <>
        <div className="edit">
        <button className='editbutton' onClick={props.handleEdit}>Edit</button>
        </div>
        </>
    )
}