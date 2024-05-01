import { useState } from "react";
import { v4 as uuid} from "uuid";
import Chore from "./Chore";
import ToDoForm from "./ToDoForm";

const ToDoList = () => {
    const initialState = [
        {id: uuid(), name: 'Laundrey', time: '11:00 a.m.'},
        {id: uuid(), name: 'Dishes', time: '11:30 a.m.'}
    ]
    const [items, setItems] = useState(initialState)
    const addItem = (newItem) => {
        setItems(items => [...items, { ...newItem, id: uuid() }])
    }
    const removeItem = (id) => {
        setItems(items => items.filter(item => item.id !== id));
    }
    return (
        <div>
            <h3>To Do List</h3>
            <ToDoForm addItem={addItem}/>
            <div>
                {items.map(({ id, name, time }) => <Chore id={id} name={name} time={time} removeItem={removeItem} key={id} />)}
            </div>
        </div>
    )
}

export default ToDoList