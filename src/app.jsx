const root = document.querySelector('#root');

function App() {
    const [activity, setActivity] = React.useState("");
    const [todos, setTodos] = React.useState([]);
    const [edit, setEdit] = React.useState({});

    function generateId() {
        return Date.now();
    }

    function saveTodoHandler(event) {
        event.preventDefault();

        if (edit.id) {
            const updatedTodo = {
                id: edit.id,
                activity
            };

            const editTodoIndex = todos.findIndex(function(todo) {
                return todo.id == edit.id
            });

            const updatedTodos = [...todos];

            updatedTodos[editTodoIndex] = updatedTodo;

            setTodos(updatedTodos);

            return cancelEditHandler();
        }

        setTodos([...todos, {
            id: generateId(),
            activity,
        }]);
        setActivity('');
    }

    function removeTodoHandler(todoId) {
        const filterTodos = todos.filter(function (todo) {
            return todo.id !== todoId
        })

        setTodos(filterTodos);

        if (edit.id) {
            cancelEditHandler();
        }
    }

    function editTodoHandler(todo) {
        setActivity(todo.activity);
        setEdit(todo);
    }

    function cancelEditHandler(event) {
        setEdit({});
        setActivity("");
    }
    
    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={saveTodoHandler}>
                <input 
                    type="text" 
                    placeholder="Silahkan Masukan" 
                    value={activity}
                    onChange={function(event) {
                    setActivity(event.target.value)
                    
                }} />
                
                <button type="submit">{edit.id ? "Simpan Perubahan" : "Tambah"}</button>
                {edit.id && <button onClick={cancelEditHandler}>Batal Edit</button>}
        
            </form>
                
            <ul>
                {todos.map(function(todo) {
                    return (
                        <li key={todo.id}>{todo.activity}
                            <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                            <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
                        </li>

                    ) 
                })}
            </ul>
        </>

    )

    
}
    ReactDOM.render(<App />, root);
