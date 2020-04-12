import React from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import { v4 as uuidv4 } from 'uuid';
import Question from '../Bits/Question'
import styles from './Custom.module.css'
import removeHTMLEntities from './CorrectJSON'

export default class Random extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            questions: [],
            resultClass : styles.hide,
            submitClass : styles.hide,
            isLoading : false 
        }
        this.tracker = []
        this.result = 0
    }

    componentDidMount(){

        this.setState({
            isLoading:true
        })

        axios.get("https://opentdb.com/api.php?amount=10")
        .then(response=>{
            let questions_formatted = removeHTMLEntities(response.data.results)
            this.setState({
                isLoading: false,
                questions : questions_formatted,
                submitClass: styles.show
            })
        })
        .catch(error=>{
            console.log("ERROR during random question fetch",error)
        })
    }

    keepCount = (id,ifCorrect)=>{
        console.log(id," is Question Index and is the answer selected correct? ",ifCorrect)
        this.tracker[id]=ifCorrect 
        console.log(this.tracker, " is current tally of user's correctness")
    }

    calculateResult = ()=>{
        let correct = 0
        this.tracker.forEach((item)=>{
            if(item==true) correct++
        })
        this.setState({
            resultClass: styles.show
        })
        this.result = correct
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    render(){
        return(
            <div>

            <Row className={this.state.resultClass}><h1 className="text-center display-4">You got {this.result} correct!</h1></Row>
            {this.state.isLoading?<div className="display-4 text-white text-center mt-5">L O A D I N G . . .</div>:
                <Row style={{margin:"0"}} >
                {
                    this.state.questions.length!==0 &&
                    this.state.questions.map((qsn,index)=>{
                        return <Question key={uuidv4()} id={index} data={qsn} track={this.keepCount}/>
                    })
                    
                }
            </Row>
            }
            
            <Row style={{margin:"0"}} className={`text-center ${this.state.submitClass}`}>
                    <button className={styles.submit} onClick={this.calculateResult}>
                    S U B M I T
                    </button>
            </Row>
            </div>
        )
    }
}
