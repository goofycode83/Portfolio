import NavBar from "./NavBar"

const ToDoList = () => {

    return (
    <>
    <NavBar/>
    <h1>To Do List</h1>
    <form>
        <label>Input To Do List Items:
        <input type="text" defaultValue='...' name="searchbar"></input>
        </label>
        <button type="submit" onClick={handleAdd}>add</button>
    </form>

    <ul>
        <li>apple<button type="submit" onClick={handleDelete}>delete</button></li>
    </ul>
    </>
    )
}

export default ToDoList