import Form from "./Form";
import React ,{useState} from "react";
import Todo from "./components/Todo";
function App(props) {
  //receive the todos as a property and use them to set a initial state 
  const [toDos, setToDos]=useState(props.toDos);
  //this function is called when the add button in the form is clicked
  function removeToDo(id){
    setToDos(toDos.filter(todo=>todo.id!=id));
  }
  function addnewToDo(text){
    const id=Math.random()+'';
    const newToDo={id:id,text:text, removeToDo:removeToDo};
    setToDos([newToDo,...toDos]);
  }
  const toDoList=toDos.map(toDo=> <Todo {...toDo} />)
  return (
    <div className='page-content'>
      <header>
        <h1 className='page-title'>To-Do List</h1>
      </header>
      <Form addnewToDoFunction={addnewToDo}/>
      <div className='todos-holder'>
        {toDoList}
    </div>
    </div>
  );
}
export default App;
