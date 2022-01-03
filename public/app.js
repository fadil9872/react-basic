const root = document.querySelector('#root');

function App() {
  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  function addTodoHandler(event) {
    event.preventDefault();
    setTodos([...todos, activity]);
    setActivity('');
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Silahkan Masukan",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo
    }, todo);
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);