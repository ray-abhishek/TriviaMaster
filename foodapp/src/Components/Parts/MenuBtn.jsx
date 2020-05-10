import React from 'react' 
import styles from './RestaurantDetails.module.css'
import { Button } from '@material-ui/core'


const MenuBtn = () => {

    return(
        <Button type="button" color="secondary" variant="contained" className={styles.menubtn}>Menu</Button>
    )
}

export default MenuBtn
