import React, { Component } from 'react'
import Main from './Main';
import { Card, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
        }
    }
    incrementLikes = () => {
        this.setState({
            likes: this.state.likes + 1,
        });
    }
openModal =()=>{
    let title = this.props.title;
    let imageUrl=this.props.imageSrc;
    let description=this.props.description;
    let keyword =this.props.keyword;
    let horns = this.props.horns;
    this.props.handleOpen(title,imageUrl,description,keyword,horns);
}

    render() {
        return (
            <>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.imageSrc} alt="" onClick={this.incrementLikes} />
                        <Card.Body>
                            <Card.Title> <h4> {this.props.title}  </h4> </Card.Title>
                            <Card.Text>
                                <h6> likes: {this.state.likes} ❤️</h6>
                            </Card.Text>
                            <Button onClick={this.openModal} variant="primary"> For More Details </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}

export default HornedBeast
