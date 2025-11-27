import React, { useMemo } from 'react';

const UseMemo = ({ counter, setCounter, setTodos, todos }) => {
  
  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating expensive operation...");
    
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result = i;
    }
    
    return result;
  }, [todos]);

  return (
    <div>
      <h2>React.useMemo</h2>
      
      <h3>My todos</h3>
      
      <div data-testid="todos-display">
        {todos.map((todo, index) => (
          <p key={index} data-testid={`todo-${index}`}>
            {todo}
          </p>
        ))}
      </div>
      
      <button 
        onClick={addTodo}
        data-testid="add-todo-button"
      >
        Add Todo
      </button>
      
      <div>
        <p data-testid="counter-display">
          Count: {counter} <button 
            onClick={handleIncrement}
            data-testid="increment-button"
          >
            +
          </button>
        </p>
      </div>

      <h3>Expensive Calculation</h3>
      <p data-testid="expensive-calc">{expensiveCalculation}</p>
    </div>
  );
};

export default UseMemo;