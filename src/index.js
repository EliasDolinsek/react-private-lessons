import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

//const store = createStore(reducer)

ReactDOM.render(
    //<Provider store={store}>
    <App/>,
    //</Provider>,
    document.getElementById('root')
);