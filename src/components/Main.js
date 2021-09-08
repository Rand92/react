import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import Form from './Data.json'

class Main extends Component {
    render() {
        return (
            <div className='row'>

               { 
                 this.props.data1.map(images=>{
                   return <HornedBeast title={images.title} imageSrc={images.image_url} description={images.description} keyword ={images.keyword} horns={images.horns}
                   handleOpen ={this.props.handleOpen} /> 
                  
                   
                  })  

               } 
              
            </div>
        )
    }
}

export default Main
