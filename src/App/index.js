import React from 'react';
import {AppUI} from './AppUI';

//import './App.css';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar curso', completed: false},
  {text: 'Correr', completed: false}
];


function App(props) {

  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('') // esto me permite darle un estado. El array recibe un valor y tambien una funcion para setear el valor

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {

    searchedTodos = todos.filter( todo => {

      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);
  
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);
  
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };


  return (
   <AppUI 
   totalTodos={totalTodos}
   completedTodos={completedTodos}
   searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
   />
  );
}

export default App;
