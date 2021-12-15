import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';

import WelcomePage from './Components/Screens/WelcomePage';
import StudentLogin from './Authentication/StudentLogin';
import StudentSignup from './Authentication/StudentSignup';
import FacultyLogin from './Authentication/FacultyLogin';
import AdminLogin from './Authentication/AdminLogin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/plagarismdetection" element={<WelcomePage />}/>
        <Route path="/plagarismdetection/studentlogin" element={<StudentLogin />} />
        <Route path="/plagarismdetection/studentsignup" element={<StudentSignup />} />
        <Route path="/plagarismdetection/facultylogin" element={<FacultyLogin />} />
        <Route path="/plagarismdetection/adminlogin" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
