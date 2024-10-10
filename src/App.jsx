import { Educationexperience } from './components/education';
import { UpdateStudentbio } from './components/studentbio';
import { PracticalExperience } from './components/experience';
import './App.css'







function App() {
return(
  <>
  <div className="headermain">
  <h1>Come lets fulfill your desires</h1>
  </div>
 <Educationexperience/>
 <UpdateStudentbio/>
 <PracticalExperience/>
</>
)
}
export default App;
