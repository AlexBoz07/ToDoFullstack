import { useContext, useState } from 'react';
import './Principal.css'
import Task from './Task';
import AddTask from './addTask';
import { Link, Outlet } from 'react-router-dom';
import { Context } from './Servicios/Memoria';
import './Task.css'


const Principal = () => { 
    const [showModal, setShowModal] = useState(false);
    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const [state, dispatch] = useContext(Context);
        
    return (
        <div className="principal">
            <main className='main'>
            {state.orden.map(id => {
        return ( <Task 
            key={id} 
            id={id} 
            title={state.tasks[id].title} 
            done={state.tasks[id].done}
        />)
        }) }
        <Outlet />
            </main>
            <div className='container'> <button className='addButton' onClick={handleOpen}>+</button>
            <AddTask show={showModal} handleClose={handleClose} /></div>
        </div>
    )
};

export default Principal;