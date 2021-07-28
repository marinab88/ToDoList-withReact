import React from "react";

const Form = ({ inputText, setInputText, todos, setToDos, setStatus }) => {
  // JS code and Function
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitToDoHandler = (e) => {
    e.preventDefault();
    setToDos([
      ...todos, 
      { text: inputText,
        completed: false,
        id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
// Function that filter the list (all, completed, uncompleted)
  const statusHamdler = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form>
      <input 
            value={inputText} 
            onChange={inputTextHandler} 
            type="text" 
            className="todo-input" />
      <button 
            onClick={submitToDoHandler} 
            className="todo-button" 
            type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select 
          onChange={statusHamdler} 
          name="todos" 
          className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;