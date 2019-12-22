import React, { Component } from 'react';

class ErrorHandler extends React.Component {    
    constructor(props) {
      super(props)
      this.state = { errorOccurred: false }
    }
  
    componentDidCatch(error, info) {
      this.setState({ errorOccurred: true });
    }
  
    render() {
      return this.state.errorOccurred ? <h1>Something went wrong. try Reload.</h1> : this.props.children
    }
  }

  export default ErrorHandler;