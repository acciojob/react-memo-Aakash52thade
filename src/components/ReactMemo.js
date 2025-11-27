import React, { useState } from 'react';

const ReactMemo = ({ skills, setSkills }) => {  // Changed from todos to skills
  const [inputValue, setInputValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    
    if (inputValue.trim().length > 5) {
      setSkills([...skills, inputValue.trim()]);  // Changed from todos to skills
      setInputValue("");
    }
  };

  return (
    <div>
      <h2>React.memo</h2>
      
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          data-testid="memo-input"
        />
        <button 
          onClick={handleClick}
          data-testid="submit-button"
        >
          Add Skill
        </button>
      </div>

      <div data-testid="skills-list">
        {skills.map((skill, index) => (  // Changed from todos to skills
          <li key={index} data-testid={`skill-item-${index}`}>
            {skill}
          </li>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ReactMemo);