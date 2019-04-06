import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

class App extends Component {
  render() {

    // Initial State
    const initState = {
      default : 'this is default value'
    }

    // @reducer
    // for create a state
    const reducer = (initState, action) => {
      switch (action.type) {
        case 'React':
          return {
            ...initState,
            love: 'i love React'
          }

        case 'Example':
          return {
            ...initState,
            payload: action.payload
          }

        default: 
          return initState;
      }
    }

    // Data Store
    let store = createStore(reducer);

    // @Update Data Collect
    // After Dispatch
    let updateState = {};

    // store  subscribe
    // you should must subscribe to take data from store
    store.subscribe(() => {
      updateState = store.getState();
    });

    // @actions passess to update state
    store.dispatch({ type: 'C'});  // this action give us a null object
    store.dispatch({ type: 'D'});  // this action give us a null object
    store.dispatch({ type: 'React' }); 
    store.dispatch({ type: 'Example' , payload : 'this is simple example of pure REDUX'});


       
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h3>{updateState.love.toUpperCase()}</h3>
          <h3>{updateState.payload}</h3>
        </header>
      </div>
    );
  }
}

export default App;
