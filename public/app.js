const root = document.querySelector('#root');

function App() {
  const fruits = [{
    id: 1,
    item: "apple"
  }, {
    id: 5,
    item: "grape"
  }, {
    id: 3,
    item: "jagung"
  }, {
    id: 4,
    item: "orange"
  }];
  return /*#__PURE__*/React.createElement("ul", null, fruits.map(function (fruit) {
    return /*#__PURE__*/React.createElement("li", {
      key: fruit.id
    }, fruit.id);
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);