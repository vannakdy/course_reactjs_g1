import React from 'react';
import {useParams} from "react-router-dom"

const TeacherUpdateScreen = () => {
    const param = useParams();
    return (
        <h1>TeacherUpdateScreen {param.id}</h1>
    )
}

export default TeacherUpdateScreen;