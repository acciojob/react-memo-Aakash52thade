import React, { useState } from 'react';

const ReactMemo = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    
    if (inputValue.trim().length > 5) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>React.memo</h2>
      
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          data-testid="memo-input"
        />
        <button 
          onClick={handleClick}
          data-testid="submit-button"
        >
          Add Skill
        </button>
      </div>

      <div data-testid="todos-list">
        {todos.map((todo, index) => (
          <li key={index} data-testid={`todo-item-${index}`}>
            {todo}
          </li>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ReactMemo);
