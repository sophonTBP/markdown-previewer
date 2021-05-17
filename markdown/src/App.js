

import './App.css';
import React from 'react';

import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
this.handleChange=this.handleChange.bind(this)
    // Change code above this line
  }
  // Change code below this line

handleChange(event) {
    this.setState({
      input: event.target.value
    });
}
  
  render() {
    return (
      <div class= "container">
       <header id="header" >React Markdown previewer</header>
<textarea value = {this.state.input} onChange = {this.handleChange} id="editor"></textarea>
        
        

        <div id="preview"><div>previewer:</div>{
        unified()
        .use(parse)
        .use(remark2react)
        .processSync(this.state.input).result
        }</div>
        <footer id="footer">this project uses Remark to sanitize input</footer>
      </div>
    );
  }
};

export default App;
