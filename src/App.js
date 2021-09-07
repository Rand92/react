
import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import HornedBeast from './components/HornedBeast'
import Data from './components/Data.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import SelectedBeast from './components/SelectedBeast'

class App extends Component {
  constructor(props){
super(props);

this.state={
  viewModal:false,
  title:"",
  description :"",
  imageUrl :"",
  keyword:"",
  horns:"",
}
  }

  handleClose =()=>{
    this.setState({
      viewModal :false
    })
  }
handleOpen=(title,imageUrl,description,keyword,horns)=>{
  this.setState({
    viewModal:true,
    title:title,
    imageUrl:imageUrl,
    description:description,
    keyword:keyword,
    horns:horns,
  })
}

  render() {
    return (
      <div>
     <Header/>  
     <Main data1 ={Data}  handleOpen={this.handleOpen}/>
     <SelectedBeast handleClose={this.handleClose}
     viewModal={this.state.viewModal} title={this.state.title} imageUrl={this.state.imageUrl} description={this.state.description} keyword={this.state.keyword} horns={this.state.horns} />

      <Footer/>
      </div>
    )
  }
}

export default App


