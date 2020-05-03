import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import Category from '../Parts/Category'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

const basicGrid = {
    display : 'flex',
    flexDirection : 'row',
    flexWrap : 'wrap',
    
}

export default function FOOD(props){
    console.log(props, " are props inside FOOD")
    const categories = useSelector(state => state.menu.categories)
    console.log(categories, " are categories")
    return(
        <Grid style={basicGrid}>
            {
                categories.map(category => {
                    return <Link to={`/${category.title}`}>
                                <Category  key={uuidv4()} {...category}/>
                            </Link>
                })
            }
        </Grid>
    )
}