import React from 'react'
import { Button, Grid, Paper, Typography, Divider, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import styles from './RestaurantDetails.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
  //    border:'2px solid rgb(59, 228, 143)',
      marginTop : '1rem',
      maxWidth : '1200px'
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const RestaurantBody = ({name, image_url, categories,cost_for_two,min_cost,time,payment_method,rating,votes,reviews , menu , index}) => {
    const classes = useStyles();
    return(
    <Grid container className={styles.container}>
        <Grid item xs={2}  className={styles.first}>
          <img src={image_url} alt="img"/>
        </Grid>
        <Grid item xs={7} className={styles.middle}>
        <div className={styles.flexdown}>
              <h1>{name}</h1>
              <p className={`${styles.muted}`}>{categories.join(", ")}</p>
              <p>Delivery Time : {time}</p>
              <p className={styles.invisible}>Accepts {getPayments(payment_method)} only</p>
        </div>
        </Grid>
        <Grid item xs={3}  className={styles.last}>
        <div className={`${styles.flexdown} ${styles.apart}`}>
            <div>
            <div class={styles.ratings}>{rating}</div>
            <p>{votes} votes</p>
            <p>{reviews} reviews</p>
            </div>
        </div>
        </Grid>
    </Grid>
)
}

export default RestaurantBody

const getPayments = (obj)=>{
    let allowedMethods = []
 //   console.log("key is ",obj)
    for(let key in obj)
        if(obj[key]==true)
            allowedMethods.push(key.toString())
    return allowedMethods.join(", ")
}