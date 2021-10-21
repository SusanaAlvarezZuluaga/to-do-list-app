import Form from "./Form";
import React ,{useState} from "react";
import Todo from "./components/Todo";
function App() { 
  const [toDos, setToDos]=useState([]);
  //this function is called when the add button in the form is clicked
  function removeToDo(id){
    let filteredArray=toDos.filter((todo,index)=>index!==id)
    setToDos(filteredArray);
  }
  function addnewToDo(name){
    const newToDo={name:name};
    setToDos([newToDo,...toDos]);
  }
 
  return (
    <div className='page-content'>
      <header>
        <h1 className='page-title'>To-Do List</h1>
      </header>
      <Form addnewToDoFunction={addnewToDo}/>
      <div className='todos-holder'>
        {toDos.map((toDo,index)=> 
          <Todo
            key={index} 
            id={index}
            name={toDo.name}
            removeToDo={removeToDo}
          />)}
      </div>
    </div>
  );
}
export default App;
