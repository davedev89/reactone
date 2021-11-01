import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton (props) {

     const onClickButton = (msg) => {
          alert(msg);
     };

     return (
          <button 
          className="CreateTodoButton"
          onClick= {() => onClickButton ('Aqui se deberia abrir el modal')} // el console.log (y todo lo que necesito que lo ejecute el usuario) tiene que ir en una funcion porque sino se ejecuta de una
          >
               +
          </button>
     );
}

export { CreateTodoButton }; //de esta forma exporto con un nombre explicito para evitar confusiones