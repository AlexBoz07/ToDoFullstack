import { useContext, useState } from 'react';
import './Task.css'
import { Context } from './Servicios/Memoria';

const Task = ({title, children, id}) => {
        const [state, dispatch] = useContext(Context);
        const [done, setDone] = useState('taskBox')
        const handleDelete = () => {
            dispatch({ type: 'DELETE', id });
        };
        const handleCheck = () => {
            setDone('boxCheck')
        }
        
    
return (
        <div className={done}>
            <div className="taskTitle">{title}</div>
            <div className='buttonsC'>
            <button className="complete" onClick={handleCheck}>✔️</button>
            <button className='delete' onClick={handleDelete}>✖️</button>
            {children}
            </div>
        </div>
    )
};

export default Task;