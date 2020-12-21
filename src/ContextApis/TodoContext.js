import {useState, createContext} from 'react'

export const TodoContext = createContext()

export const TodoProvider = props =>{
    const [todos, setTodos] = useState([
        {
            todo: 'Clean roomasdas dasdas dasdasd asdasd asd as das das da sda sdas das d'
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
