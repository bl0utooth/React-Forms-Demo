const Chore = ({id, name, time, removeItem}) => {

    return (
        <ul>
            <li>To Do: {name}</li>
            <li>When: {time}</li>
            <button onClick={() => removeItem(id)}>Remove Chore</button>
        </ul>
    )
}

export default Chore;