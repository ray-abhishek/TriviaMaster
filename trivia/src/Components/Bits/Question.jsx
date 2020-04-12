import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Form from 'react-bootstrap/Form'
import './question.css'

export default class Question extends React.Component{
    constructor(props){
        super(props)
        this.state={
            all_answers : [this.props.data.correct_answer,...this.props.data.incorrect_answers],
            selectedOption: ''
        }
    }

    handleOptionChange = (e)=>{
        let ifCorrect 
        console.log(e.target.value, " is selected answer")
        this.setState({
            selectedOption : e.target.value
        })
        if(e.target.value==this.props.data.correct_answer)
            ifCorrect = true 
        else ifCorrect = false 
        this.props.track(this.props.id, ifCorrect)
    }

    render(){
        const {question, correct_answer, incorrect_answers} = this.props.data
     //   console.log(question, correct_answer, incorrect_answers)
        console.log(question, " is THE QUESTION")
        console.log("Correct Answer is ", correct_answer)
        return(
            <div className="question">
                <h1>{question}</h1>
                <Form>
                {this.state.all_answers.map((ans,index)=>{
                    return <Form.Check type="radio" checked={this.state.selectedOption==ans} value={ans} onChange={this.handleOptionChange}
                    id={ans+this.props.id} key={uuidv4()} label={ans}/>
                })}
                </Form>
            </div>
        )
    }
}