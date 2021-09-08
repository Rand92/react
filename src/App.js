
import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import HornedBeast from './components/HornedBeast'
import Data from './components/Data.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import SelectedBeast from './components/SelectedBeast'
import Form from './components/Form'

class App extends Component {

  render() {
    return (
      <div>
     <Header/>  
     <Form dropdown ={this.props.form}/>
    
      <Footer/>
      </div>
    )
  }
}

export default App


