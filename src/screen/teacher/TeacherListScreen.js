import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const TeacherListScreen = () => {
    const navigate = useNavigate();
    const  onClick = () => {
        navigate("/teacher/create")
    }
    return (
        <div>
            <h1>TeacherListScreen</h1>
            {/* <Link to="/teacher/create">Create</Link> */}
            <button onClick={onClick}>Create</button>
        </div>
        
    )
}

export default TeacherListScreen;