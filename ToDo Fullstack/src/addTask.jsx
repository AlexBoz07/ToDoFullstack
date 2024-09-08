import { CSSTransition } from 'react-transition-group';
import './addTask.css';
import { useContext, useRef, useState } from 'react';
import { Context } from './Servicios/Memoria';

export default function AddTask({ show, handleClose }) {
    const [form, setForm] = useState({
        title: '',
        done: false
    });
    const {title} = form;
    const [state, dispatch] = useContext(Context);
    const onChange = async (e, p) => {setForm(state => ({...state, [p]: e.target.value}))};
    const submit = async (e) => {
        e.preventDefault();
        dispatch({type: 'CREATE', task: form })
    }
    const nodeRef = useRef(null);
    return (
        <CSSTransition
            in={show}
            timeout={300}
            classNames="fade"
            unmountOnExit
            nodeRef={nodeRef}
        >
            <div  ref={nodeRef} className="containerT">
                <div className="addTask" onClick={(e) => e.stopPropagation()}>
                    <h1>Create a Task</h1>
                    <div className="input-container">
                    <form onSubmit={submit}>
                        <input type="text" id="my-input" placeholder=" " value={title} onChange={e => onChange(e, 'title')} />
                        <label htmlFor="my-input">Title</label>
                    <button type='submit' className='add' onClick={handleClose} >Add Task</button>  
                    </form>
                    <button onClick={handleClose} className='button'>Cancel</button> 
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
}