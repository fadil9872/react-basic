const root = document.querySelector('#root');

function App() {
  const namaRef = React.useRef(null);

  function ketikaSubmit(event) {
    event.preventDefault(); // agar tidak mereload

    console.log("nama: ", namaRef.current.value);
  }

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: ketikaSubmit,
    action: ""
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: ""
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    ref: namaRef,
    value: namaRef.current.value
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);