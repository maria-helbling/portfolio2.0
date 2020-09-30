import React from 'react'
import './style.css'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
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

export default function Intro() {
    const classes =useStyles()

        function HighlightsB() {
            return (
                <React.Fragment>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>highlight</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>highlight</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>highlight</Paper>
                </Grid>
              </React.Fragment>
            )
        }
        function HighlightsT() {
            return (
                <React.Fragment>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>highlight</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>highlight</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>highlight</Paper>
                </Grid>
              </React.Fragment>
            )
        }
    return(
        <>
        <Grid container>
            <Grid item xs={12}>
            <p>A technology enthusiast who strives in ambiguous fast paced environments, translating real world business problems to technical solutions.</p>
                <p> 10+ years of business experience, working with B2B and B2C oriented goods and services, in legacy and start-up organisations, across a variety of industries.  Senior leader, who took an organisation of 300 people and over $250 million revenue through 5 M&A deals, 60% revenue and 9% market share growth. </p>
                <p>Earned a BA in Economics from the University of Cambridge (UK) and MSc in same from Universiteit van Amsterdam (NL). Most recently received a certificate in full stack web development from the University of Washington bootcamp. </p>
                <p>A team player with a strong quantitative background in analysis and business modelling and a track record for learning fast.</p> 
            </Grid>
            <Grid container item xs={12} lg={6}>
                <HighlightsB/>
            </Grid>
            <Grid container item xs={12} lg={6}>
                <HighlightsT/>
            </Grid>
        </Grid>
        </>
    )
}