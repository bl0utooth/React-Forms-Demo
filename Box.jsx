const Box = ({ id, backgroundColor, width, height, remove }) => {
    const handleRemove = () => {
        remove(id)
    }
    return (
    <div>
        <div style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor
        }}>
        </div>
        <button onClick={handleRemove}>Remove Box</button>
    </div>    
    )
}

export default Box;