import React, { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');

  const handleChange = (event) => {
    setInputTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputTask.trim() !== '') {
      setTasks([...tasks, inputTask]);
      setInputTask('');
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={inputTask}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
