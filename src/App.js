import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import {DisplayCharacter} from './Pages/Lesson_1/DisplayCharacter'
import {LearnCharacters} from './Pages/Lesson_1/LearnCharacters'
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path ="/" element={<LearnCharacters/>} />
        <Route path ="/characters" element={<DisplayCharacter />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
