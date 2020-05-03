import React from 'react'
import styles from './RestaurantDetails.module.css'

const getPayments = (obj)=>{
    let allowedMethods = []
 //   console.log("key is ",obj)
    for(let key in obj)
        if(obj[key]==true)
            allowedMethods.push(key.toString())
    return allowedMethods.join(", ")
}

const RestaurantDetails = ({data})=>{

    const {name, image_url, categories,cost_for_two,min_cost,time,payment_method,rating,votes,reviews} = data 
  //  console.log(name, image_url, categories,cost,min_cost,time,payment_method,rating,votes,reviews)

  return (
      <div className={`${styles.flexdown} ${styles.fixwidth}`}>
          <div className={`${styles.flexside} ${styles.fixstretch}`}>
              <div><img src={image_url} alt="img"/></div>
              <div className={styles.flexdown}>
                    <h1>{name}</h1>
                    <p className={`${styles.categories} ${styles.muted}`}>{categories.join(", ")}</p>
                    <p className={styles.muted}>Cost for two : {cost_for_two}</p>
                    <div className={styles.flexside}>
                        <p>Min: {min_cost}</p>
                        <p>{time}</p>
                    </div>
                    <p>Accepts {getPayments(payment_method)} only</p>
              </div>
              <div className={`${styles.flexdown} ${styles.goright}`}>
                  <div class={styles.ratings}>{rating}</div>
                  <p>{votes} votes</p>
                  <p>{reviews} reviews</p>
              </div>
          </div>
          <div className={styles.floatright}>
              <div className={styles.orderline}>Order Online ></div>
          </div>
      </div>
  )

}

export default RestaurantDetails