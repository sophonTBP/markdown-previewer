
import './logo.svg';
import './App.css';
import React from 'react';
import ReactFCCtest from 'react-fcctest';
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
var breaks = require('remark-breaks')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:placeholder
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
        <ReactFCCtest />
       <h3 id="header" >React Markdown previewer</h3>
<textarea  value = {this.state.input} onChange = {this.handleChange} id="editor"></textarea>
        
        

        <div id="preview">{
        unified()
        .use(parse)
        .use(remark2react)
        .use(breaks)
        .processSync(this.state.input).result
        }</div>
        <footer id="footer">this project uses Remark to sanitize input</footer>
      </div>
      
    );
  }
};

export default App;
const placeholder = `# Welcome to my React Markdown Previewer! 
# h1 title 
## h2 title
[a link](url),

some code\`<div></div>\`

\`\`\`
git status
git add 
git commit
\`\`\`

An unordered list:
- George Washington
- John Adams
- Thomas Jefferson

A blockquote:
>The missile knows where it is at all times. 
>It knows this because it knows where it isn't,
>by subtracting where it is, from where it isn't,
>or where it isn't, from where it is, whichever is greater, 
>it obtains a difference, or deviation. 
>The guidance sub-system uses deviations 
>to generate corrective commands to drive the missile 
>from a position where it is, to a position where it isn't,
>and arriving at a position where it wasn't, it now is.

An image: 
![logo](logo.svg) 

**bold** text.`








