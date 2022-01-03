const root = document.querySelector('#root');

function App() {
    const [activity, setActivity] = React.useState("");
    const [todos, setTodos] = React.useState([]);
    const [edit, setEdit] = React.useState({});
    const [message, setMessage] = React.useState("")

    function generateId() {
        return Date.now();
    }

    function saveTodoHandler(event) {
        event.preventDefault();

        if (!activity) {
            return setMessage("nama actifitas tidak boleh kosong")
        }

        setActivity('');

        if (edit.id) {
            const updatedTodo = {
                ...edit,
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
            done: false
        }]);
        setMessage('');
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

    function cancelEditHandler() {
        setEdit({});
        setActivity("");
    }

    function doneTodoHandler(todo) {
        const updatedTodo = {
            ...todo,
            done: todo.done ? false : true
        }

        const editTodoIndex = todos.findIndex(function(currentTodo) {
            return currentTodo.id == todo.id
        });

        const updatedTodos = [...todos];
        updatedTodos[editTodoIndex] = updatedTodo;

        console.log(updatedTodos);
        setTodos(updatedTodos);
    }
    
    return (
        <>
            <h1>Todo List</h1>
            {message && <div className="" style={{color: "red"}}>{message}</div>}
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
            
            {todos.length > 0 ? (
                <ul>
                    {todos.map(function(todo) {
                        return (
                            
                            <li key={todo.id}>
                                <input 
                                    type="checkbox"
                                    onChange={doneTodoHandler.bind(this, todo)}
                                    checked={todo.done} 
                                />
                                {todo.activity}
                                ({todo.done ? "Selesai" : "Belum Selesai"})
                                <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                                <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
                            </li>

                        ) 
                    })}
                </ul>
            ) : ( 
                <p>
                    <i>Tidak ada data</i>
                </p>
            )}
        </>

    )

    
}
    ReactDOM.render(<App />, root);
