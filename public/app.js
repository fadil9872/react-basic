const root = document.querySelector('#root');

function App() {
  const [nama, setNama] = React.useState('');

  function ketikaSubmit(event) {
    event.preventDefault();
    console.log("nama: ", nama);
  }

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: ketikaSubmit,
    action: ""
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: ""
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    onChange: function (event) {
      setNama(event.target.value);
    },
    value: nama
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);