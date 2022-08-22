import React, {useState} from 'react';
import './App.css';

function App() {

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(a + 1)
    }

    const onClickDelete = () => {
        setA(a = 0)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>add number</button>
            <button onClick={onClickDelete}>reset</button>
        </div>
    );
}

export default App;
