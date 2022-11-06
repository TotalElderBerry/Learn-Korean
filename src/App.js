import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import {DisplayCharacter} from './Pages/Lesson_1/DisplayCharacter'
import {LearnCharacters} from './Pages/Lesson_1/LearnCharacters'
import {AlphabetQuiz} from "./Pages/Lesson_1/Quizzes/AlphabetQuiz" 
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path ="/" element={<LearnCharacters/>} />
        <Route path ="/characters" element={<DisplayCharacter />} />
        <Route path ="/lesson_1/quiz" element={<AlphabetQuiz />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
