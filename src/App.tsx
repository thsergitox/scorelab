import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Sidebar from './components/Sidebar';
import LoginTeachers from './components/LoginTeachers';
import Question from './components/Questions';
import Quiz from './components/Quiz';
import QuizTimer from './components/QuizTimer';

import clientSocket from './network/index';
import LandingPage from './components/LandingPage';
function App() {
  

  return (
    <>
      <LandingPage/>
    </>
  )
}

export default App
