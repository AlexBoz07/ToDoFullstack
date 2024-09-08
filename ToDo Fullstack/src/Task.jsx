import { useContext } from 'react';
import './Task.css'
import { Context } from './Servicios/Memoria';

const Task = ({title, children, id}) => {
        const [state, dispatch] = useContext(Context);
        const handleDelete = () => {
            dispatch({ type: 'DELETE', id });
        };
    
return (
        <div className="taskBox">
            <div className="taskTitle">{title}</div>
            <div className='buttonsC'>
            <button className="complete">✔️</button>
            <button className='delete' onClick={handleDelete}>✖️</button>
            {children}
            </div>
        </div>
    )
};

export default Task;