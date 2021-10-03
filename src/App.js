import React from "react"
import Header from "./component/Header"
import Cart from "./component/Cart"
import Total from "./component/Total"
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Cart/>
      <Total/>
    </React.Fragment>
  );
}

export default App;
