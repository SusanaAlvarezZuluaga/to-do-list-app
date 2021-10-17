import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
function Todo(props){
    const [modalIsOpen,setModalIsOpen]=useState(false);
    function deleteHandler(){
        //when we click on the delete button we want to switch to the state where the modal is  open
        setModalIsOpen(true);
    }
    function closeModalHandler(){
        setModalIsOpen(false);
    }
    return (
        <div>
            <div className='todo'>
                <div className='todo-header'>
                    <div>
                        <span class="material-icons md-36">radio_button_unchecked</span>
                    </div>
                    <div className='todo-title'>{props.text}</div>
                </div>
                <div>
                    <span className="material-icons md-36" onClick={deleteHandler}>delete</span>
                </div>
            </div> 
            {modalIsOpen ? <Modal cancelClick={closeModalHandler} confirmClick={props.removeToDo} id={props.id}/> : null}
            {modalIsOpen? <Backdrop onClick={closeModalHandler}/> : null}
        </div>
    );  
}
export default Todo;