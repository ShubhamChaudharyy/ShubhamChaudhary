import React from 'react';
import {Link} from 'react-router-dom' 
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
    <heading className={classes.heading}>PROJECTS</heading>
    <div className={classes.project_section}>
       <Timeline className={classes.timeline} >
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography className={classes.duration} color="textSecondary">PeerCode IDE</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={classes.descrip}>
                A RealTime Collaborative Code Editor(Live Share)
                with Support of Video Calling and A Canvas Board 
                on Side to Pen Down your logic to any concept and 
                explain it to other Peer on side.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography className={classes.duration} color="textSecondary">Algorithm Visualiser</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={classes.descrip}>            
            Built React based Application that allows user to 
            compare and Visualise various types of 
            sorting Algorithms(Bubble Sort,Quick Sort,heap Sort,Merge Sort)  
            and Pathfinding Algorithms such as (A* Search and Dijkstra’s Algorithm) 
            that too in RealTime.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography className={classes.duration} color="textSecondary">PowerPoint Automation Tool</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={classes.descrip}>            
            A Tool that automates powerpoint presentation process and build PPT on its own.
            Implemented GraphQL to reduce server response time from 1500ms to 200ms.
            Used React Context API and MVC Architecture.</Typography>
          </TimelineContent>
        </TimelineItem>
        <div className={classes.themed_button}>
          <div className={classes.child_btn_theme}>
            <a href="https://github.com/ShubhamChaudharyy" className={classes.href}>
            More On Github
            </a>
          </div>
        </div>
        {/* <TimelineItem>
          <TimelineOppositeContent>
            <Typography className={classes.duration} color="textSecondary">
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={classes.descrip}>Sleep</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography className={classes.duration} color="textSecondary">9:00 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={classes.descrip}>Repeat</Typography>
          </TimelineContent>
        </TimelineItem> */}
      </Timeline>
    </div>
    </React.Fragment>
    )
}