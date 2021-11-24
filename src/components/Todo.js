import { useState } from 'react';

function Todo(props) {
  const { name, id, removeToDo } = props;
  const [completed, setCompleted] = useState(false);

  return (
    <div>
      <div className="todo">
        <div className="todo-header">
          <div
            className="todo-check-button"
            onClick={() => setCompleted(!completed)}
          >
            <span className="material-icons md-36">
              {completed ? 'check_box' : 'check_box_outline_blank'}
            </span>
          </div>
          <div className="todo-title">{name}</div>
        </div>
        <div>
          <span className="material-icons md-36" onClick={() => removeToDo(id)}>
            delete
          </span>
        </div>
      </div>
    </div>
  );
}
export default Todo;
