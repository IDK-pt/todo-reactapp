import {useState, createContext} from 'react'

export const TodoContext = createContext()

export const TodoProvider = props =>{
    const [todos, setTodos] = useState([
        {
            todo: 'Clean room'
        },
        {
            todo: 'Study'
        },
        {
            todo: 'Make lunch'
        },
        {
            todo: 'Pack stuff'
        }
    ])
    return(
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    );
}
