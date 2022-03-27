
import React from "react";
import HomeScreen from "./screen/home/HomeScreen";
import TeacherScreen from "./screen/teacher/TeacherScreen";
import StudentScreen from "./screen/student/StudentScreen";
import ClassroomScreen from "./screen/classroom/ClassroomScreen";
import CourseScreen from "./screen/course/CourseScreen";
// .....
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import "./App.css"

const App = () => {
    return (
        <BrowserRouter>
            <div style={{padding:20}}>
                <div className="menu_main">
                    <Link className="menu_item" to="/">Home</Link>
                    <Link className="menu_item" to="/course">Course</Link> 
                    <Link className="menu_item" to="/teacher">Teacher</Link> 
                    <Link className="menu_item" to="/student">Student</Link>
                    <Link className="menu_item" to="/classroom">Classroom</Link>
                </div>

                <Routes>
                    {/* register route */}
                    <Route path="/" element={<HomeScreen/>} />
                    <Route path="/course" element={<CourseScreen/>} />
                    <Route path="/teacher" element={<TeacherScreen/>} />
                    <Route path="/student" element={<StudentScreen/>} />
                    <Route path="/classroom" element={<ClassroomScreen/>} />
                    <Route path="*" element={<h1>Route not found</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default App;