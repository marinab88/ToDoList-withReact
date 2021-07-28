import React from 'react';
//Import Components
import Todo from './Todo';

const TodoList = ({ todos, setToDos, filteredTodos }) => {
  
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo text={todo.text}
                key={todo.id} 
                todo={todo}
                todos={todos}
                setToDos={setToDos}/>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;