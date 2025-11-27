import React, { useState } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

function App() {
  const [todos, setTodos] = useState([]);  // For UseMemo only
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);  // For ReactMemo only
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <UseMemo 
        todos={todos}
        setTodos={setTodos}
        counter={counter}
        setCounter={setCounter}
      />
      
      <ReactMemo 
        skills={skills}
        setSkills={setSkills}
      />
    </div>
  );
}

export default App;