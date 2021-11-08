import React from 'react';
import './TodoCounter.css';

function TodoCounter (props) {

     const {total, completed} = props;
     return (
          <h2>Has completado {completed} de {total} TODOs</h2>
     );
}

export { TodoCounter }; //de esta forma exporto con un nombre explicito para evitar confusiones