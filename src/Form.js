import React, { useState } from 'react';
function Form(props) {
  const [newTask, setNewTask] = useState('');
  function handleAdd(e) {
    e.preventDefault();
    props.addnewToDoFunction(newTask);
    setNewTask('');
  }
  return (
    <div className="form">
      <div className="input-holder">
        <input
          type="text"
          id="new-todo-input"
          className="input-todo"
          name="text"
          autoComplete="off"
          value={newTask}
          placeholder="add a new to do"
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <div>
        <span className="material-icons md-36" onClick={handleAdd}>
          add_circle_outline
        </span>
      </div>
    </div>
  );
}
export default Form;
