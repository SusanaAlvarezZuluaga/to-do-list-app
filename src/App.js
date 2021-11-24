import Form from './Form';
import React, { useState } from 'react';
import Todo from './components/Todo';
import rand from 'random-key';
function App() {
  const [toDos, setToDos] = useState([]);
  function removeToDo(id) {
    let filteredArray = toDos.filter((todo) => todo.id !== id);
    setToDos(filteredArray);
  }
  function addnewToDo(name) {
    const newToDo = { id: rand.generate(), name: name };
    setToDos([newToDo, ...toDos]);
  }
  return (
    <div className="page-content">
      <header>
        <h1 className="page-title">To-Do List</h1>
      </header>
      <Form addnewToDoFunction={addnewToDo} />
      <div className="todos-holder">
        {toDos.length > 0 ? (
          <div className="your-tasks-title">Your taks</div>
        ) : null}
        {toDos.map((toDo) => (
          <Todo
            key={toDo.id}
            id={toDo.id}
            name={toDo.name}
            removeToDo={removeToDo}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
