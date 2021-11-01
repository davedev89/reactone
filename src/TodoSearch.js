import React from 'react';
import './TodoSearch.css';

function TodoSearch () {

     const [searchValue, setSearchValue] = React.useState('') // esto me permite darle un estado. El array recibe un valor y tambien una funcion para setear el valor

     const onSearchValueChange = (event) => {
          console.log(event.target.value);
          setSearchValue(event.target.value);
     };

     return [
          <input className="TodoSearch" placeholder = "Ingresar TODO" 
          value={searchValue}
          onChange={onSearchValueChange}/>,

          <p>{searchValue}</p>
          
     ];
}

export { TodoSearch }; //de esta forma exporto con un nombre para evitar confusiones