import React from 'react'
import {AppBar} from '@material-ui/core'
import useStyles from './export.styles.jsx/styles'
import './css/navbar.css'
export default () =>{
    const classes=useStyles()
    return(
        <AppBar position='static' className={`${classes.nav_parent} font`}>
        <div className={classes.nav_special}>SUBHAM CHOUDHARY</div>
        <div className={classes.nav_items}></div>
        <div className={classes.nav_items}></div>
        <div className={classes.nav_items}></div>
        <div className={classes.nav_items}></div>
        </AppBar>
    )
}