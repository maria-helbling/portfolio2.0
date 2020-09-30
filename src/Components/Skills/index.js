import React from 'react'
import './style.css'
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

export default function Skills() {
    const classes = useStyles();
    const businessSkills = ["Business Operations", "Strategic Planning", "Go-to-Market STrategy"]
    const techSkills = ["JavaScript", "HTML5", "CSS", "MySQL"]
    const softSkills = ["Problem Solving", "Communication skills", "Collaboration", "Cross-Functional Leadership"]

    return (
        <>
            <Grid container className={classes.root}>
                <Grid item xs={12} md={6}>
                    {businessSkills.map((item) => (<Chip label={item} />))}
                </Grid>
                <Grid item xs={12} md={6}>
                    {techSkills.map((item) => (<Chip label={item} />))}
                </Grid>
                <Grid item xs={12}>
                    {softSkills.map((item) => (<Chip label={item} />))}
                </Grid>
            </Grid>
        </>
    )
}