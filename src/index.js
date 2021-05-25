import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App(){
  return (
    <div>
      <Welcome name="Rhie" />
      <Welcome name="Chang" />
      <Welcome name="Min" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

