import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Divider, Grid, Typography } from '@material-ui/core';
import MenuList from '../Parts/MenuList'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Menu(props) {
  
   
    var { index } = useParams()
  //  console.log(index," is NAME")
    index = Number(index)
    const { restaurants } = useSelector(state => state.menu)
    console.log(restaurants, " are the RESTAURANTS")
    const menu = restaurants[index].menu

    console.log(menu, " is menu Inside MENU")

  return (
    <Grid container style={center}>
      <Grid item xs={12}>
            
            <MenuList data={menu}/>
      </Grid>
    </Grid>
  );
}

// <Typography>M E N U</Typography>

const center = {
  margin : '0 auto',
}