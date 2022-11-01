import React from "react";
import { Box, Button, Grid, FilledInput, Select, Link, MenuItem, Dialog, DialogContent, DialogActions, DialogTitle, Typography, makeStyles, IconButton, CircularProgress } from "@material-ui/core";
import { useState } from "react";
import {Close as CloseIcon } from '@material-ui/icons'
import { format } from 'date-fns'
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    info: {
        '& > *': {
            margin: '5px'
        }
    },
    skillChip:{
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "15.5px",
        borderRadius: "5px",
        fontWeight: 600,
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
    },
}));

const ViewModalTypography = withStyles({
    root: {
      color: "gray",
    },
  })(Typography);

export default (props) => {
    const classes = useStyles();
    return (
    <Dialog open={!!Object.keys(props.job).length} maxWidth="md">
    <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                {props.job.title} @ {props.job.companyName}
                <IconButton onClick={props.closeModal}>
                    <CloseIcon  />
                </IconButton>
                </Box>

            </DialogTitle>
            <DialogContent>
            <Box>
<Box className={classes.info} display="flex">
    <ViewModalTypography variant="h6"> Job Title:</ViewModalTypography>
    <Typography variant="h6"> {props.job.type}</Typography>
    
</Box>
<Box className={classes.info} display="flex">
<ViewModalTypography variant="h6"> Location:</ViewModalTypography>
    <Typography variant="h6">{props.job.country}, {props.job.city}, {props.job.state}, {props.job.zipcode} - {props.job.location} </Typography>
</Box>
<Box className={classes.info} display="flex">
<ViewModalTypography variant="h6">Description:</ViewModalTypography>
    <Typography variant="p"> {props.job.description}</Typography>
</Box>
<Box className={classes.info} display="flex">
<Typography variant="h6">Company:</Typography>
    <Typography variant="h6"> {props.job.companyName}</Typography>
</Box>
<Box className={classes.info} display="flex">
<Typography variant="h6">Salary:</Typography>
    <Typography variant="h6"> {props.job.salarymin} - {props.job.salarymax} </Typography>
</Box>

<Box ml={0.5}>
<Typography variant="h6">Skills:</Typography>
    <Grid container alignItems="center">
        {props.job.skills &&
        props.job.skills.map((skill) => (
            <Grid item key={skill} className={classes.skillChip}>
                {skill}
            </Grid>
        ))}
        </Grid>
</Box>

            </Box>
            </DialogContent>
            <DialogActions>
    <Button variant="contained" color="primary" href={props.job.companyUrl} target="_blank">Apply</Button>
            </DialogActions>
            </Dialog>

)}