import React, { useState } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

function App() {
  const [todos, setTodos] = useState([]);
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
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;