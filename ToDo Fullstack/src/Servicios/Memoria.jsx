import { createContext, useReducer } from "react";
export const Context = createContext(null);
const listaMock = [
    {
        'id': 1,
        'title': 'Buy bread',
        'done': false
  },
    {
        'id': 2,
        'title': 'Buy milk',
        'done': false
  
    },
    {
        'id': 3,
        'title': 'Buy eggs',
        'done': false
    },

    {   'id': 4,
        'title': 'chinga',
        'done': false
    }
  
    ];

const initialState = {
    orden: [],
    tasks: {}
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'PUT': {
            const tasks = action.tasks;
            const newState = {
                orden: tasks.map(task => task.id),
                tasks: tasks.reduce((tasks, task) => ({...tasks, [task.id]: task}), {})
        }
        return newState;
    }
    
        case 'CREATE': {
            const id = Math.random(); //action.task.id
            const newState = {
                orden: [...state.orden, id],
                tasks: {...state.tasks, [id]: action.task}
        }
        return newState;
        }

        case 'DELETE': {
            const id = action.id;
            if (!id) {
                console.error("ID de la tarea es undefined.");
                return state; // No hacemos nada si el id es undefined
            }
            const { [id]: removedTask, ...remainingTasks } = state.tasks; // Eliminamos la tarea del estado
            const newState = {
                orden: state.orden.filter(taskId => taskId !== id),
                tasks: remainingTasks
            };
            return newState;

        }
}}

const tasks = reducer(initialState, {type : 'PUT', tasks : listaMock})

function Memoria({children}) {
    const [state, dispatch] = useReducer(reducer, tasks);
    return ( 
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
     );
}

export default Memoria;