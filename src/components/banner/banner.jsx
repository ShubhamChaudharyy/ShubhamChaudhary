import React from 'react'
import {Grid} from '@material-ui/core'
import './css/export.banner.css'
import useStyles from './export.styles.jsx/styles'
import Navbar from '../navbar/navbar'
import Intro from './intro' 
import Project from '../project_section/projects'
import Experience from '../experience_section/experience'
export default()=>{
    const classes=useStyles()
    return(
        <Grid item xs>
        <div className={classes.basic}>
            <section className={classes.banner}>
                <Navbar/>
                <Intro/>
                <Experience/>
                <Project/>
            </section>
        </div>
        </Grid>
    )
}