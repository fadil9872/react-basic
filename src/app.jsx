const root = document.querySelector('#root');

function App() {
    const fruits = [{id: 1, item: "apple"}, {id: 5, item: "grape"}, {id: 3, item: "jagung"}, {id: 4, item: "orange"}];

    return (
        <ul>
            {fruits.map(function(fruit) {
                return <li key={fruit.id}>{fruit.id}</li>
            })}
        </ul>
    )
}

    ReactDOM.render(<App />, root);
