
function Modal(props){
    function manageConfirmClick(){
        props.confirmClick(props.id);
    }
    return(
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={props.cancelClick}>Cancel</button>
            <button className='btn' onClick={manageConfirmClick}> Confirm</button>
        </div>
    );
}
export default Modal