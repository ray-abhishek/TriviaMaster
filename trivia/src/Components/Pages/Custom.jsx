import React from 'react'
import axios from 'axios'
import SelectItem from '../Bits/SelectItem'
import Row from 'react-bootstrap/Row'
import { v4 as uuidv4 } from 'uuid';
import Question from '../Bits/Question'
import styles from './Custom.module.css'

export default class Custom extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            category:[],
            categoryObject:[],
            difficulty:["Any Difficulty","Easy","Medium","Hard"],
            type: ["Any Type","Multiple Choice","True / False"],
            selectedCategory:'',
            selectedDifficulty:'',
            selectedType:'',
            questions: [],
            result:0,
            resultClass : styles.hide,
            submitClass : styles.hide, 
        }
        this.tracker = []
    }

    componentDidMount(){
        
        let categoriesFromStorage = JSON.parse(localStorage.getItem('storedCategories')) || []
        console.log(categoriesFromStorage, " is stored")
        if(categoriesFromStorage.length>0)
        {
            let categoryNames = categoriesFromStorage.map((item)=>{
                return item["name"]
            })
            console.log("getting from storage")
            this.setState({
                category : categoryNames,
                categoryObject : categoriesFromStorage
            })
        }
        else
        axios.get("https://opentdb.com/api_category.php")
        .then(response=>{
            console.log(response.data.trivia_categories, " is response")
            localStorage.setItem('storedCategories',JSON.stringify(response.data.trivia_categories))
            let categoryNames = response.data.trivia_categories.map((item)=>{
                return item["name"]
            })
            console.log("getting from API")
            this.setState({
                category : categoryNames,
                categoryObject : response.data.trivia_categories
            })
        })
        .catch(error=>{
            console.log("ERROR OCCURED", error)
        })

        
    }

    findCategory = (val)=>{
        console.log("CATEGORY STATE as ",this.state.category)
        let category = this.state.categoryObject.find((item)=>{
            if(item["name"].toLowerCase()==val)
            return true
        })
        console.log(category, " is category OBJECT FOUND")
        this.setState({
            selectedCategory: category["id"]
        })
        console.log(this.state.selectedCategory, " is category selected")
    }

    findDifficulty = (val)=>{
        this.setState({
            selectedDifficulty : val
        })
        console.log(this.state.selectedDifficulty, " is difficulty selected")
    }

    findType = (val)=>{
        if(val=='multiple choice')
        val = "multiple"
        else if(val=='true / false')
        val = "boolean"
        this.setState({
            selectedType : val
        })
        console.log(this.state.selectedType, " is type selected")
    }

    fetchQuestions = ()=>{
/*      Sample URL
        https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple
*/
        let diff_param = '', type_param = '', cate_param = this.state.selectedCategory
        if(this.state.selectedDifficulty!="any difficulty")
        diff_param = `&difficulty=${this.state.selectedDifficulty}`

        if(this.state.selectedType!="any type")
        type_param = `&type=${this.state.selectedType}`

        axios.get("https://opentdb.com/api.php?amount=10&category="+cate_param+diff_param+type_param)
        .then(response=>{
            console.log(response.data.results, " are the questions fetched BEFORE FORMATTING")
            let questions_formatted = removeHTMLEntities(response.data.results)
            console.log("FORMATTING\nFORMATTING\nFORMATTING\n")
            console.log(questions_formatted, " AFTER FORMATTING")
            this.setState({
                questions : questions_formatted,
                submitClass: styles.show
            })
        })
        .catch(error=>{
            console.log("ERROR during question fetch",error)
        })
    }

    keepCount = (id,ifCorrect)=>{
        console.log(id," is Question Index and is it correct? ",ifCorrect)
        this.tracker[id]=ifCorrect 
        console.log(this.tracker, " is current tally of user's correctness")
    }

    calculateResult = ()=>{
        let correct = 0
        this.tracker.forEach((item)=>{
            if(item==true) correct++
        })
        this.setState({
            result : correct,
            resultClass: styles.show
        })
    }

    render(){
        return(
            <div>
            <Row style={{margin:"0"}} className="d-flex flex-row justify-content-between m-3 select-bar">
            <SelectItem data={this.state.category} select={this.findCategory}/>

            <SelectItem data={this.state.difficulty} select={this.findDifficulty}/>

            <SelectItem data={this.state.type} select={this.findType}/>

            <button onClick={this.fetchQuestions}>Generate Quiz</button>
            </Row>

            <Row className={this.state.resultClass}><h1 className="text-center display-4">You got {this.state.result} correct!</h1></Row>

            <Row style={{margin:"0"}} >
                {
                    this.state.questions.length!==0 &&
                    this.state.questions.map((qsn,index)=>{
                        return <Question key={uuidv4()} id={index} data={qsn} track={this.keepCount}/>
                    })
                    
                }
            </Row>
            <Row style={{margin:"0"}} className={`text-center ${this.state.submitClass}`}>
                    <button className={styles.submit} onClick={this.calculateResult}>
                    S U B M I T
                    </button>
            </Row>
            </div>
        )
    }
}

const removeHTMLEntities = (questionObject)=>{
    
    questionObject.forEach((item)=>{
        let qFormatted = item["question"]
        qFormatted = qFormatted.replace(/&quot;/g,'"')
        qFormatted = qFormatted.replace(/&amp;/g,'&')
        qFormatted = qFormatted.replace(/&#039;/g,'\'')
        item["question"]=qFormatted

        let correctAnsFormatted = item["correct_answer"]
        correctAnsFormatted = correctAnsFormatted.replace(/&quot;/g,'"')
        correctAnsFormatted = correctAnsFormatted.replace(/&amp;/g,'&')
        correctAnsFormatted = correctAnsFormatted.replace(/&#039;/g,'\'')
        item["correct_answer"]=correctAnsFormatted

        let incorrectAnsFormatted = item["incorrect_answers"]
        incorrectAnsFormatted = incorrectAnsFormatted.map((ans=>{
            ans = ans.replace(/&quot;/g,'"')
            ans = ans.replace(/&amp;/g,'&')
            ans = ans.replace(/&#039;/g,'\'')
            return ans
        }))
        item["incorrect_answers"]=incorrectAnsFormatted
    })

    return questionObject
}