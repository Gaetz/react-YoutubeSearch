import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. Should produce some html.
const App = () => {
    return <div>Oyo!</div>
}

// Take this component's generated html and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));