import React from 'react'
import './style.css'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
        height:'100vh',
        textAlign: 'center'
    },
    businessIntro: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main
    },
    devIntro: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main
    },
    titleText: {
        fontFamily: 'Montserrat'
    }
  }));

export default function Hero() {
    const classes= useStyles();

    return (
        <>

        <Grid container className={classes.root}>
            <Grid item container xs>
            <Grid className={classes.businessIntro} item xs={6}>
                <Typography variant='h2' className={classes.titleText}>Business Strategy and Operations</Typography>
            </Grid>
            <Grid className={classes.devIntro} item xs={6}>
                <Typography variant='h2' className={classes.titleText}>Web dev and PM</Typography>
            </Grid>
            </Grid>
        <Grid item xs container justify="center">
            <Grid item sx={12}>
                <img src="https://www.alexela.ee/sites/default/files/styles/1170x350/public/2019-04/MariaH.jpg?itok=jcdw9MZE" alt="Maria Helbling"/>
            </Grid>
        </Grid>
        </Grid>
        </>
    )
}
