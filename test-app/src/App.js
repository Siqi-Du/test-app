import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import './app.scss';

const tempArr = [{
  fName: 'Jane',
  lName: 'Doe',
  email: "jd@gmail.com",
  age: 24,
  status: 1
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="the Headline component" desc="desc should be string" tempArr = {tempArr}/>
        </section>
      </div>
    );
  }
}

export default App;
