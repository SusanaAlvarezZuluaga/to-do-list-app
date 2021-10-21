function Todo(props){
    return (
        <div>
            <div className='todo'>
                <div className='todo-header'>
                    <div>
                        <span className="material-icons md-36">radio_button_unchecked</span>
                    </div>
                    <div className='todo-title'>{props.name}</div>
                </div>
                <div>
                    <span className="material-icons md-36" onClick={()=>props.removeToDo(props.id)} >delete</span>
                </div>
            </div> 
        </div>
    );  
}
export default Todo;