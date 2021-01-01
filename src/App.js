import './App.css';
import TodoList from './Components/TodoList'
import {TodoProvider} from './ContextApis/TodoContext'
import {useEffect} from 'react'

function App() {

  useEffect(() => {
    //localStorage.setItem('todos', JSON.stringify([{todo: 'ola'}, {todo: 'adeus'}]))
  }, [])

  return (
    <div className='vertical-center App'>
      <div className="card-transparent mx-auto card-mod" style={{marginTop:'30px',marginBottom:'30px'}}>
        <div className="card-boy card-body-mod img-rounded p-5" style={{backgroundColor: 'rgba(0,0,0, 0.03)'}}>
          <h1 className='text-white' style={{fontSize:60}}>Todo List</h1>
          <br></br>
          <hr></hr>
          <br></br>
          <TodoProvider>
            <TodoList/>
          </TodoProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
