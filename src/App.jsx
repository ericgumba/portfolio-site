

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return ( 
        <div className = "App">
            <header className = "App-header"> 
                <h1 className="App-title"> 
                    Looking for a web developer? 
                </h1> 
                <div>
                    <a className="waves-effect waves-light btn-large" href='mailto:ericgumba@gmail.com'>Contact</a>
                    <a className="waves-effect waves-light btn-large" style={{margin: '0 20px'}}>Projects</a>
                    <a className="waves-effect waves-light btn-large" href='https://github.com/okmanl'>Github</a>
                </div>
            </header> 
            <p className="App-intro" style={{margin:'0 70px'}}>
            Hello, my name is Eric Gumba, I'm a fourth year student at San Francisco State University. 
            Currently I'm interested in developing web applications. As a result I've spent some amount 
            of time developing various applications such as a sudoku solver, chess, blackgammon. I'm Currently
            working on a fullstack application that allows users to send their followers surveys via email.

            </p> 

            <h2> SKILLS </h2>
            <div className="app-skills">
            <li>
                Node.js
            </li>
            <li> Express </li>

            </div>
        </div>
        );
    }
}

export default App;