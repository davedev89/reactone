import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';

//import './App.css';

const todos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar curso', completed: false},
  {text: 'Correr', completed: false}
];


function App(props) {
  return (
   <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      

      <TodoList>
        {todos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}/> 
          //cuando renderizo distintos elementos dentro de un componente, React necesita que le agregue una key a esos componentes, que es la parte que va a cambiar entre uno y otro
        ))}
      </TodoList>

      <CreateTodoButton />
      
   </React.Fragment>
  );
}

export default App;
