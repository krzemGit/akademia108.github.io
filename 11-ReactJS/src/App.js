import React from 'react';
import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter</h1>
        <div id="credentials">by Lech Krzemiński</div>
      </header>
      <Counter />
    </div>
  );
}

export default App;
