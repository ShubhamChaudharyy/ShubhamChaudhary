import React from 'react'
import * as Icons from '@material-ui/icons'
import useStyles from './export.styles.jsx/styles'
export default ()=>{
    const classes=useStyles()
    return(
        <div className={classes.center}>
        <div className={classes.intro}>
            Hi, 
            <br/>
            I am a Full Stack Developer
            <br/>
            and a Competitive Programmer
            <div className={classes.contact_mediums}>
                Pre-Final year Student Pursuing B.Tech Computer Science 
                <br/>
                from Maharaja Surajmal Institute of Technology (GGSIPU)
            </div>
            <div className={classes.contact_icons}>
                Reach Me<br/>
                <div className={classes.icons_div}>
                    <a href="https://github.com/ShubhamChaudharyy" className={classes.href}>
                    <Icons.GitHub className={`${classes.git} icons`}/>
                    </a>
                    <a href="https://www.facebook.com/shubhamhex10" className={classes.href}>
                    <Icons.Facebook className={`${classes.fb} icons`}/>
                    </a>
                    <a href="https://www.linkedin.com/in/shubham-choudhary-5b276a146/" className={classes.href}>
                    <Icons.LinkedIn className={`${classes.lkd} icons`}/>
                    </a>
                    <a href="mailto:chd.nonu26@gmail.com" className={classes.href}>
                    <Icons.Mail className={`${classes.doc} icons`}/>
                    </a>
                </div>
            </div>
        </div>
        <div className={classes.dp}>
            <img src={require('../img/display_picture.jpg')} className={classes.dp_child}></img>
        </div>
        </div>
    )
}