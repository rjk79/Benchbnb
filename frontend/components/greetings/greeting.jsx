import React from 'react'
import {Link} from 'react-router-dom'

class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const name = this.props.currentUser ? this.props.currentUser.username : ""
    return this.props.currentUser ? 
      (
        <>
          <h1>Welcome, {name}</h1>
          <button>Log Out</button>
        </>
      ) : (
        <>
          <Link to="/signup">Sign Up</Link>
          <br/>
          <Link to="login">Log In</Link>
        </>
      )
  }
}

export default Greeting