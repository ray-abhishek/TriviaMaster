import React from 'react'
import styles from './RestaurantDetails.module.css'
import { Button, Grid, Paper, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const getPayments = (obj)=>{
    let allowedMethods = []
 //   console.log("key is ",obj)
    for(let key in obj)
        if(obj[key]==true)
            allowedMethods.push(key.toString())
    return allowedMethods.join(", ")
}

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


const RestaurantDetails = ({data})=>{
    const classes = useStyles();

    
    const {name, image_url, categories,cost_for_two,min_cost,time,payment_method,rating,votes,reviews , menu , index} = data 
  //  console.log(name, image_url, categories,cost,min_cost,time,payment_method,rating,votes,reviews)

  


  return (
      <div className={classes.root}>
          <Paper elevation={3}>
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
                  <Link to={`/restaurants/${index}`}>
                    <Button type="button" color="secondary" variant="contained" className={styles.menubtn}>Menu</Button>
                  </Link>
              </div>
              </Grid>
          </Grid>
          </Paper>
      </div>
  )

}

export default RestaurantDetails

