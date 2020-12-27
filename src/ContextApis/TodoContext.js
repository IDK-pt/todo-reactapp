import {useState, createContext} from 'react'

export const TodoContext = createContext()

export const TodoProvider = props =>{
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem('todos')) 
    )
    return(
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    );
}
