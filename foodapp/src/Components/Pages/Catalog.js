import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import CatalogItem from '../Parts/CatalogItem'
import { v4 as uuidv4 } from 'uuid'
import { Link, useParams } from 'react-router-dom'

const basicGrid = {
    display : 'flex',
    flexDirection : 'row',
    flexWrap : 'wrap',
    justifyContent : 'center',
}

export default function Catalog(props){
    console.log(props, " are props inside CATALOG")
    var { category } = useParams()
    console.log(category, " are PARAMS from HOOK")
  //  const { category } = props.match.params
    const food = useSelector(state => state.menu.food)
    console.log(food, " are food")
    return(
        <Grid style={basicGrid}>
            {
                food.filter(fooditem =>{
                    return fooditem.category == category
                })
                .map(fooditem => {
                    return <Link to={``}>
                                <CatalogItem  key={uuidv4()} {...fooditem}/>
                            </Link>
                })
            }
        </Grid>
    )
}