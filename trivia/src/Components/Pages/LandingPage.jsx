import React from 'react'
import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CustomCard from '../Bits/CustomCard'
import RandomCard from '../Bits/RandomCard'
import './LandingPage.css'

export default class LandingPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="landingDiv">
            <Row>
                <Col className="section mt-1">
                    <Row>
                        <Col className="stayleft"><Link to="/custom"><CustomCard /></Link></Col> 
                    </Row>
                    <Row>
                        <Col className="stayleft"><Link to="/random"><RandomCard /></Link></Col>
                    </Row>
                </Col>
                <Col>
                    
                </Col>
            </Row>
           
            </div>
        )
    }
}