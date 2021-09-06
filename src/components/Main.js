import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import data from './data.json'

class Main extends Component {
    render() {
        return (
            <>
               { 
                 data.map(images=>{
                   return <HornedBeast title={images.title} imageSrc={images.image_url} description={images.description} /> 
                  
                   
                  })  
               } 
              
            </>
        )
    }
}

export default Main
