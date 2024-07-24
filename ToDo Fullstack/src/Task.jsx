import './Task.css'


const Task = () => {
    return (
        <div className="taskBox">
            <h1>TITULO</h1>
            <button className="complete">✔️</button>
            <button className="delete">✖️</button>
        </div>
    )
};

export default Task;