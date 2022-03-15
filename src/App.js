import AboutScreen from '../src/screen/about/AboutScreen';
import HomeScreen from '../src/screen/home/HomeScreen';

import TeacherListScreen from '../src/screen/teacher/TeacherListScreen';
import TeacherCreateScreen from '../src/screen/teacher/TeacherCreateScreen';
import TeacherUpdateScreen from '../src/screen/teacher/TeacherUpdateScreen';

import MainContainer from "../src/screen/container/MainContainer";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return(
    <BrowserRouter>
      <MainContainer>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/about' element={<AboutScreen/>}/>

          <Route path='/teacher' element={<TeacherListScreen/>}/>
          <Route path='/teacher/create' element={<TeacherCreateScreen/>}/>
          <Route path='/teacher/:id' element={<TeacherUpdateScreen/>}/>
          
        </Routes>
      </MainContainer>
    </BrowserRouter>
  )
}
export default App;