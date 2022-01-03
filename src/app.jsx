const root = document.querySelector('#root');

function App() {
    const [activity, setActivity] = React.useState("");
    const [todos, setTodos] = React.useState([]);


    function addTodoHandler(event) {
        event.preventDefault();
        setTodos([...todos, activity]);
        setActivity('');
    }
    
    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={addTodoHandler}>
                <input 
                    type="text" 
                    placeholder="Silahkan Masukan" 
                    value={activity}
                    onChange={function(event) {
                    setActivity(event.target.value)
                    
                }} />
                
                <button type="submit">Tambah</button>
        
            </form>
                
            <ul>
                {todos.map(function(todo) {
                    return <li key={todo}>{todo}</li>
                })}
            </ul>
        </>

    )

    
}
    ReactDOM.render(<App />, root);
