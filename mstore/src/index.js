import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp'

const divRoot = document.querySelector("#root");

ReactDOM.render(<CounterApp value="Los Mejores productos para ti."/>, divRoot);