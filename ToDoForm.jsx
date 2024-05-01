import { useState } from "react";


const ToDoForm = ({addItem}) => {
    const initialState = {
        name: '',
        time: ''
    }
    
    const [formData, setFormData] = useState(initialState)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ ...formData })
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Chores:</label>
            <input id="name" type="text" name="name" placeholder="chore name" value={formData.name} onChange={handleChange}/>

            <label htmlFor="time">Time:</label>
            <input type="text" name="time" placeholder="time" value={formData.time} onChange={handleChange} />
       
            <button>Add Chore to the List</button>
        </form>
    )
}

export default ToDoForm;