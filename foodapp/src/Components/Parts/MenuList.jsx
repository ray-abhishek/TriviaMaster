import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Paper, ExpansionPanelSummary, Typography, ListSubheader, Collapse, Chip, ListItemIcon } from '@material-ui/core';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { v4 as uuidv4 } from 'uuid'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { addToCart, removeFromCart } from '../../Redux/menuReducer/action';
import { useDispatch , useSelector } from 'react-redux';
import ItemCount from './ItemCount'
import AddButton from './AddButton'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 950,
    backgroundColor: theme.palette.background.paper,
    margin : '0 auto',
  },
  nested: {
    paddingLeft: theme.spacing(9),

  },
  flexside : {
    marginLeft : '1.5rem',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between',
    minWidth : '100px'
  },
  chip : {
    position : 'absolute',
    right : '130px',
  }
}));

export default function MenuList({ data , restaurant }) {
  const classes = useStyles();
  const dispatcher = useDispatch()
  const [open, setOpen] = React.useState('');
//  const [ keySt , setKeySt ] = React.useState('')
  const handleClick = (key) => {
    console.log(key, " is key")
    if(open==='')
    setOpen(key)
    else if(open===key) setOpen('')
    else if(open!==key) setOpen(key)
   // setOpen(!open);
  };

  console.log(data, " is MENU inside MENU LIST")

  var { cart } = useSelector(state => state.menu)
    console.log(cart, " Is CART RIGHT NOW")

  return (
      <List  className={classes.root}
            subheader={
              <ListSubheader component="div">
                M E N U
              </ListSubheader>
            }>
      {
        Object.keys(data).map( foodType => {
          console.log(foodType, " food type inside MENU LIST")
       //   const op = open || false 
          return (
          <div key={uuidv4()}>
            
          <ListItem button onClick={()=>{
            handleClick(foodType)}}>
            <ListItemIcon>
              <FastfoodIcon />
            </ListItemIcon>
            <ListItemText primary={foodType} />
            { open === foodType ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.length>0 ? open===foodType : false} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              
              {
                data[foodType].map( item => {
                //  console.log(item, " is item inside FOOD TYPE")
                  return (
                    <>
                    <ListItem key={uuidv4()} className={classes.nested}>
                      <ListItemText primary={item.name} />
                      <Chip label={`${item.cost} Rs`} variant="outlined" color="secondary" className={classes.chip}/>

                      { cart ? (cart[restaurant] ? (cart[restaurant][item.name] ? <ItemCount restaurant={restaurant} item={item} style={classes.flexside}/> : <AddButton restaurant={restaurant} item={item}/> )  : <AddButton restaurant={restaurant} item={item}/>) : <AddButton restaurant={restaurant} item={item}/> }

                    </ListItem>
                    <Divider />
                    </>
                  )
                })
              }
              
             
            </List>
          </Collapse>
          </div>
        )
      })
      }
      </List>

    
  );
}