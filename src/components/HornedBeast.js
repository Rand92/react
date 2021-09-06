import React, { Component } from 'react'
import Main from './Main';

 class HornedBeast extends Component {
    constructor(props){
        super(props);
        this.state={
            likes: 0,
        }
    }
    incrementLikes =()=>{
        this.setState({
            likes:this.state.likes+1,
        });
    }
    render() {
        return (
            <>
              <h2> {this.props.title}</h2>  
            <img src={this.props.imageSrc} alt="" onClick={this.incrementLikes} /> 
            <p> {this.props.description}</p>
            <h3> likes: {this.state.likes} ❤️</h3>
            
            </>
        )
    }
}

export default HornedBeast
