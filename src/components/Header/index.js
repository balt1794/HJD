import React from 'react';
import {Box, Grid, Typography, makeStyles, Button, Item, Card, CardContent} from "@material-ui/core"
import { useState } from "react";
import SignUp from '../SignUp';



const useStyles = makeStyles({
    wrapper2:{
        backgroundColor: "#fff",
        display: 'flex',
        boxShadow: "0px 1px 5px rgba(0, 0, 0.1)",
        borderRadius: "5px",
        justifyContent: "center",
        marginLeft: "25%" ,
        width:"50%",
        "& > *":{
            flex: 1,
            height: "45px",
            margin: "8px",
        },
    },
    heroBox: {
        width: '100%',
        display: 'flex',
        minHeight: '400px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#D5F591",
      
      },
      gridContainer: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1300px',
        padding: '50px',
      },
      title: {
        paddingBottom: '15px',
      },
      subtitle: {
        
        paddingBottom: '30px',
      },
      largeImage: {
        width: '100%',
      },
});

export default props => 
{
    const classes = useStyles();
    return(


       <>
      <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
             Hire Jr Devs
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Start your developer journey with us and find opportunities at top companies who are willing to bet on you
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
        <SignUp/>
        </Grid>
      </Grid>
    </Box>

</>
        
  
      
    )
}