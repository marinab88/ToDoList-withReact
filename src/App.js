import React, {useState, useEffect} from 'react';
import './App.css';

// Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //State staff
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //Run Once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  //Use Effect
  useEffect( () => {
    filterHandler();
  }, [todos, status]);

  //Functions
  const filterHandler = () => {
    switch (status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //Save to Local
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setToDos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header> 
      <h1>To do List:</h1>
      </header>
      <Form inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setToDos={setToDos}
            setStatus={setStatus}
             />
      <TodoList todos={todos}
                setToDos={setToDos}
                filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
