import React from 'react'
import styles from './RestaurantDetails.module.css'
import { Button, Grid, Paper, Typography, Divider, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import RestaurantBody from './RestaurantBody'
import MenuBtn from './MenuBtn'
import MenuList from './MenuList'
import CartBar from './CartBar'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },

}));

const RestaurantDetails = ({data})=>{
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    
    const {name, image_url, categories,cost_for_two,min_cost,time,payment_method,rating,votes,reviews , menu , index} = data 

  const handleChange = (name) => (event, isExpanded) => {
    setExpanded(isExpanded ? name : false);
  };

  const cart = useSelector(state => state.menu.cart)

  

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === name} 
      onChange={handleChange(name)} style={margin}>
        <ExpansionPanelSummary
        expandIcon={<MenuBtn />}>
          <RestaurantBody {...data}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MenuList data = {menu} restaurant = {name}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      { cart && Object.keys(cart).length > 0 && <CartBar /> }
    </div>
  )
}

  export default RestaurantDetails

const margin = {
  marginBottom : 15,
}

