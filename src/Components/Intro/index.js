import React from 'react'
import './style.css'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height:'100vh',
      backgroundColor: theme.palette.neutral.main,
      paddingTop:theme.spacing(3),
      textAlign: 'center'
    },
    intro:{
        color:theme.palette.neutral.contrastText,
        backgroundColor:theme.palette.neutral.main
    },
    highlight:{
        padding:theme.spacing(3),
        textAlign:'center'
    },
    highlightsB:{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    highlightsT:{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    },
  }));

export default function Intro() {
    const classes =useStyles()

        function HighlightsB() {
            return (
                <React.Fragment>
                <Grid className={classes.highlight} item xs={4}>
                  <Typography variant='h3' >10+ years</Typography>
                  <Typography variant='subtitle1' >business experience</Typography>
                  
                </Grid>
                <Grid className={classes.highlight}item xs={4}>
                  <Typography variant='h3' >100%</Typography>
                  <Typography variant='subtitle1' >coolest person ever</Typography>
                </Grid>
                <Grid className={classes.highlight}item xs={4}>
                  <Typography variant='h3' >$100M</Typography>
                  <Typography variant='subtitle1' >will earn soon</Typography>
                </Grid>
              </React.Fragment>
            )
        }
        function HighlightsT() {
            return (
                <React.Fragment>
                <Grid className={classes.highlight}item xs={4}>
                  <Typography variant='h3' >CAPM</Typography>
                  <Typography variant='subtitle1' >project management</Typography>
                </Grid>
                <Grid className={classes.highlight}item xs={4}>
                  <Typography variant='h3' >20</Typography>
                  <Typography variant='subtitle1' >super cool projects</Typography>
                </Grid>
                <Grid className={classes.highlight}item xs={4}>
                  <Typography variant='h3' >all</Typography>
                  <Typography variant='subtitle1' >programming languages</Typography>
                </Grid>
              </React.Fragment>
            )
        }
    return(
        <>
        <Grid container className={classes.root}>
            <Grid item className={classes.intro} xs={12}>
            <p>A technology enthusiast who strives in ambiguous fast paced environments, translating real world business problems to technical solutions.</p>
                <p> 10+ years of business experience, working with B2B and B2C oriented goods and services, in legacy and start-up organisations, across a variety of industries.  Senior leader, who took an organisation of 300 people and over $250 million revenue through 5 M&A deals, 60% revenue and 9% market share growth. </p>
                <p>Earned a BA in Economics from the University of Cambridge (UK) and MSc in same from Universiteit van Amsterdam (NL). Most recently received a certificate in full stack web development from the University of Washington bootcamp. </p>
                <p>A team player with a strong quantitative background in analysis and business modelling and a track record for learning fast.</p> 
            </Grid>
            <Grid container item xs={12} className={classes.highlightsB}>
                <HighlightsB/>
            </Grid>
            <Grid container item xs={12} className={classes.highlightsT}>
                <HighlightsT/>
            </Grid>
        </Grid>
        </>
    )
}