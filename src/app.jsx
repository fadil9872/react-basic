const root = document.querySelector('#root');

function App() {

    const [nama, setNama] = React.useState('');

    function ketikaSubmit(event) {
        event.preventDefault();
        console.log("nama: ", nama); 
    }

    return (
        <form onSubmit={ketikaSubmit} action="">
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name="nama" onChange={function(event) {
                    setNama(event.target.value);
                }} value={nama} />
            </div>
            <button type="submit">Kirim</button>
        </form>
    )
}

    ReactDOM.render(<App />, root);
