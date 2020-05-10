import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import Category from '../Parts/Category'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import './Food.css'

const basicGrid = {
    display : 'flex',
    flexDirection : 'row',
    flexWrap : 'wrap',
    backgroundColor : 'whitesmoke',
    justifyContent : 'center',
    borderRadius : 100,
    borderTopRightRadius : 0,
    paddingBottom : '4%',
    maxWidth : '80%',
    margin : '0 auto',
}

export default function FOOD(props){
    console.log(props, " are props inside FOOD")
    const categories = useSelector(state => state.menu.categories)
    console.log(categories, " are categories")
    return(
        <div style={center}>
           
            <Grid style={basicGrid}>
             
             {  
                 categories.map(category => {
                     return <Link to={`/${category.title}`}>
                                 <Category  key={uuidv4()} {...category}/>
                             </Link>
                 })
             }
         </Grid>
        </div>
        
    )
}

const center = {
    margin : '0 auto',
    textAlign : 'center',
    backgroundColor : 'whitesmoke',
    borderRadius : 100,
    borderTopRightRadius : 0,
}

/*
 <h2>TELL US WHAT YOU WANT</h2>
 */