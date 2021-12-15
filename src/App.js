import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';

import WelcomePage from './Components/Screens/WelcomePage';
import StudentLogin from './Authentication/StudentLogin';
import StudentSignup from './Authentication/StudentSignup';
import FacultyLogin from './Authentication/FacultyLogin';
import AdminLogin from './Authentication/AdminLogin';
import AddFaculty from './Components/Screens/Admin/AddFaculty';
import ViewReport from './Components/Screens/Admin/ViewReport';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/plagarismdetection" element={<WelcomePage />}/>
        <Route path="/plagarismdetection/studentlogin" element={<StudentLogin />} />
        <Route path="/plagarismdetection/studentsignup" element={<StudentSignup />} />
        <Route path="/plagarismdetection/facultylogin" element={<FacultyLogin />} />
        <Route path="/plagarismdetection/adminlogin" element={<AdminLogin />} />
        <Route path="/plagarismdetection/addfaculty" element={<AddFaculty />} />
        <Route path="/plagarismdetection/viewreport" element={<ViewReport />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
