import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAWYARh9wb78qKqbA5mp_JPdOXVq8myU9s';

// Create a new component. Should produce some html.
const App = () => {
    return <div>Oyo!</div>
}

// Take this component's generated html and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));