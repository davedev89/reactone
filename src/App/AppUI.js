import React from "react";
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';

function AppUI() {
     totalTodos,
     completedTodos,
     searchValue,
     setSearchValue,
     searchedTodos,
     completeTodo,
     deleteTodo,

     return(
          <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete = { () => completeTodo(todo.text)}
          onDelete = { () => deleteTodo(todo.text)}
          /> 
          //cuando renderizo distintos elementos dentro de un componente, React necesita que le agregue una key a esos componentes, que es la parte que va a cambiar entre uno y otro
        ))}
      </TodoList>

      <CreateTodoButton />
      
   </React.Fragment>
     );
}

export { AppUI };