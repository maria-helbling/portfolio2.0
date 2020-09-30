import React from 'react'
import './style.css'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Grid'

export default function Projects() {
    return(
        <>
        <Grid container spacing={3}>
        <Grid item xs={6} lg={4}>
          <Paper>Project 1</Paper>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Paper>Project 2</Paper>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Paper>Project 3</Paper>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Paper>Project 4</Paper>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Paper>Project 5</Paper>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Paper>Project 6</Paper>
        </Grid>
      </Grid>
        </>
    )
}