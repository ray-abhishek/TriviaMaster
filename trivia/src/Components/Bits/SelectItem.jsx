import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class SelectItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selected : this.props.data[0]
        }
    }

    handleChange = (e)=>{
        console.log(e.target.value, " is selected value")
        this.setState({
            selected : e.target.value
        })
        this.props.select(e.target.value)
    }

    render()
    {
        return(
            <select value={this.state.selected} onChange={this.handleChange}>
                {this.props.data.map((item)=>{
                    return <option key={uuidv4()} value={item.toLowerCase()}>{item}</option>
                })}
            </select>
        )
    }
}