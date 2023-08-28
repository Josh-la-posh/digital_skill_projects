import React, { useState } from 'react'
import './todo-app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function TodoApp() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    // console.log(filteredData);

    const getData = (e) => {
        e.preventDefault();
        if (search.length > 2) {   
            data.push(search);
            setSearch('');
        }
    }

    const removeData = (index) => {

        const filteredData = data.filter(item => data.indexOf(item) != index);
        setData(filteredData);
    }



  return (
    <div className='todo-app'>
        <div className="container">
            <div className="container_child">

        <p>Todo App</p>
        <form>
            <input type="text" placeholder='Add an item ...' value={search} onChange={(e) => {setSearch(e.target.value)}}/>
            <button onClick={getData}>Add</button>
        </form>
        </div>

            <p>We have {data.length} items in our list</p>


        <ul>
            {data.map((item, index) => {
                return(
                    <li key={index}>{item}<FontAwesomeIcon icon={faTrashCan} className='delete_icon' onClick={() => {removeData(index)}}/></li>
                )
            })}
        </ul>
        </div>
    </div>
  )
}

export default TodoApp