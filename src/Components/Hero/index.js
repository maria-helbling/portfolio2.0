import React from 'react'
import './style.css'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Hero() {
    const classes= useStyles();

    return (
        <>
        <Grid container height="50%" justify="center">
            <Grid item xs={6}>
                <p>Business Strategy and Operations</p>
            </Grid>
            <Grid item xs={6}>
                <p>WEb dev and PM</p>
            </Grid>
        </Grid>
        <Grid container justify="center">
            <Grid item sx={12}>
                <img src="https://www.alexela.ee/sites/default/files/styles/1170x350/public/2019-04/MariaH.jpg?itok=jcdw9MZE" alt="Maria Helbling"/>
            </Grid>
        </Grid>
        </>
    )
}
