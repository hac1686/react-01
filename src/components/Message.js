
import React from 'react' 
import { Button } from 'antd'

class Message extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }
  handleClick(inc) {
    this.setState({ counter: this.state.counter + inc })
  }
  render() {
    return (
      <section>
        <p>Here is some interesting info.</p>
        <h2>You clicked {this.state.counter} times.</h2>
        <Button type="primary" onClick={() => this.handleClick(1)}>+1</Button>
        <Button type="primary" danger onClick={() => this.handleClick(-1)}>-1</Button>
      </section>
    )
  }
}

export default Message 







// import React from 'react'

// class Message extends React.Component {  //React.Component is the parent class here
// constructor(props){ //props is a reserved word
//     super(props)
//     this.state ={
//         counter: 0
//     }
// }

// handleClick(inc){
//   this.setState({ counter: this.state.counter + inc })

// }

//     render() { //have to use render in class components
//         return (
//             <section>
//                 <p> Here is some more interesting info</p>
//                 <h2> You clicked{this.state.counter} times</h2>
//                 <button onClick={()=> this.handleClick(1)}>+1</button>
//                 <button onClick={()=> this.handleClick(-1)}>-1</button>

//             </section>
//         )
//     }



// }

// export default Message