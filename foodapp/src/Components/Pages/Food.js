import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import Category from '../Parts/Category'
import { v4 as uuidv4 } from 'uuid'

const basicGrid = {
    display : 'grid',
    gap : 1,
    gridTemplateColumns : 'repeat(auto-fill, 200px)'
}

export default function FOOD(){

    const categories = useSelector(state => state.menu.categories)
    console.log(categories, " are categories")
    return(
        <Grid style={basicGrid}>
            {
                categories.map(category => {
                    return <Category  key={uuidv4()} {...category}/>
                })
            }
        </Grid>
    )
}