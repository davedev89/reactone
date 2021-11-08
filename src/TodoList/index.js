import React from 'react';
import './TodoList.css';

function TodoList (props) {
     return (
          <section>
               <ul>
                   {props.children}     
               </ul>
          </section>
     );
}

export { TodoList }; //de esta forma exporto con un nombre explicito para evitar confusiones