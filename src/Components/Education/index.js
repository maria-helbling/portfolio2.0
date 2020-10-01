import React from 'react'
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height:'100vh',
      backgroundColor: theme.palette.neutral.main,
      paddingTop:theme.spacing(3),
      textAlign: 'center'
    },
    content:{
        width: '90vw'
    }
  }));

export default function Education() {
    const classes = useStyles();
    return(
        <>
         <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="University of Cambridge" secondary="BA Economics" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="University of Amsterdam" secondary="MSc Economics" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <VerifiedUserIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="University of Washington" secondary="Certification: Full Stack Web Development" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <VerifiedUserIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Project Management Institute" secondary="Certified Associate of Project Management" />
      </ListItem>
    </List>
        </>
    )
}