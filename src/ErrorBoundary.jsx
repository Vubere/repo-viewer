import React from "react"

import { redirect } from "react-router-dom"



class ErrorBoundary extends React.Component{
  constructor(props){
    super(props)
    this.goBackToHome = this.goBackToHome.bind()
    this.state = {
      error: false,
    }
  }
  static getDerivedStateFromError(){
    
    return {error:true}
  }
  componentDidCatch(_, errorMessage){
    console.log(errorMessage)
  }
  goBackToHome(){
    window.location.replace(window.location.origin)
    

  }
  render(){
    const {error} = this.state
    return error?(
      <section className="errorPage">
        <p>An error occurred, go back to home page</p>
        <button onClick={this.goBackToHome}>Home</button>
      </section>
    ):this.props.children
  }
}

export default ErrorBoundary