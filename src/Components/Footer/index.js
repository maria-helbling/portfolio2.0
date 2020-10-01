import React from 'react'
import './style.css'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow:1,
      width: '100%',
      backgroundColor: theme.palette.neutral.main,
      textAlign: 'center',
      minHeight: '20vh',

    },
  }));


export default function Footer() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return(
        <>
        <Grid container justify='center' className={classes.root}>
        <Grid item sx={12}>
        <Link href="https://www.linkedin.com/in/mariahelblingprofile/" target='blank'>
        <LinkedInIcon/>
        </Link>
        <Link href="https://github.com/maria-helbling" onClick={preventDefault}>
        <GitHubIcon/>
        </Link>
        <Link href="#" onClick={preventDefault}>
        <EmailIcon/>
        </Link>
        </Grid>
        <Grid item sx={12}>
            <Typography variant='body1'>{'\u00a9'} 2020 Maria Helbling </Typography>
        </Grid>
        
        </Grid>

        </>
    )
}