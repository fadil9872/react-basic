const root = document.querySelector('#root');

function App() {

    const namaRef = React.useRef(null);

    function ketikaSubmit(event) {
        event.preventDefault();         // agar tidak mereload
        console.log("nama: ", namaRef.current.value); 
    }

    return (
        <form onSubmit={ketikaSubmit} action="">
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name="nama" ref={namaRef} value={namaRef.current.value}/>
            </div>
            <button type="submit">Kirim</button>
        </form>
    )
}

    ReactDOM.render(<App />, root);
