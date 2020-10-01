import React from 'react'
import './style.css'
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(3),
        height:'100vh',
    },
    skills: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    skillB: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        marginRight: theme.spacing(0.25),
        marginLeft: theme.spacing(0.25),

    },
    skillT:{
        backgroundColor: theme.palette.secondary.main,
        color:theme.palette.secondary.contrastText,
        marginRight: theme.spacing(0.25),
        marginLeft: theme.spacing(0.25),
    },
    skillS:{
        backgroundColor: theme.palette.neutral.main,
        marginRight: theme.spacing(0.25),
        marginLeft: theme.spacing(0.25),
    },
}));

export default function Skills() {
    const classes = useStyles();
    const businessSkills = ["Business Operations", "Strategic Planning", "Go-to-Market STrategy"]
    const techSkills = ["JavaScript", "HTML5", "CSS", "MySQL"]
    const softSkills = ["Problem Solving", "Communication skills", "Collaboration", "Cross-Functional Leadership"]

    return (
        <>
            <Grid container alignItems="center" className={classes.root}>
                <Grid xs={12}>
                    <Typography variant='h2'>Skills</Typography>
                </Grid>
                <Grid item xs={12} md={6} className={classes.skills}>
                    {businessSkills.map((item) => (<Chip label={item} className={classes.skillB} />))}
                </Grid>
                <Grid item xs={12} md={6} className={classes.skills}>
                    {techSkills.map((item) => (<Chip label={item} className={classes.skillT}/>))}
                </Grid>
                <Grid item xs={12} className={classes.skills}>
                    {softSkills.map((item) => (<Chip label={item} className={classes.skillS}/>))}
                </Grid>
            </Grid>
        </>
    )
}