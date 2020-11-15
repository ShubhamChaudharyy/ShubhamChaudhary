import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './export.styles.jsx/styles'
export default()=>{
    const classes=useStyles()
    return(
    <React.Fragment>
    <heading className={classes.heading}>EXPERIENCE</heading>
    <div className={classes.project_section}>
       <Timeline className={classes.timeline} >
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography className={classes.duration} color="textSecondary">
            Full Stack Developer Intern
            <br/>
            <span className={classes.company_name}>Prescribe (WellNexus Technologies Pvt. Ltd)</span>
            <br/>
            <span className={classes.company_name}>2020 April to 2020 July</span></Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector/>
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={classes.descrip}>
            Solely responsible in working on Database Modules 
            (NoSQL:Firebase) and 
            building of WebApp from scratch 
            both Frontend(React) and Backend(Node.js,Express.js).
            Wrote 100,000+ lines of code.The Web App is being used by many  people in Southern part of India.
            The Web App provides Digital Doctor-Patient Communication feature with video consultation                                                                                                                                                            consultation service through ZoomAPI.
            Actively contributing in daily standups , retrospectives and sprint planning.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent>
            <Typography className={classes.duration} color="textSecondary">
            Front-End Developer Intern
            <br/>
            <span className={classes.company_name}>The Indie Corp</span>
            <br/>
            <span className={classes.company_name}>2019 June to 2019 July</span></Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={classes.descrip}>
            Worked on Front-end of Real Estate Website which 
            includes reponsibilities to handle the 
            UI/UX experience of the website and frontend control-flow.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        
      </Timeline>
    </div>
    </React.Fragment>
    )
}