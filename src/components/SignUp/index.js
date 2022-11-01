/* sa 
import React from "react";
import { Box, Label, Button, Grid, FilledInput, Select, MenuItem, Typography, makeStyles, CircularProgress, FormControl, InputLabel, Input, FormHelperText, IconButton} from "@material-ui/core";
import { useState } from "react";
import { Alert, Form } from 'react-bootstrap';
import shadows from "@material-ui/core/styles/shadows";
import firebase from "firebase";
import { firestore } from "../firebase/config";
import {Close as CloseIcon } from '@material-ui/icons'




const useStyles = makeStyles((theme) => ({
    signUpContainer:{
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        background: "#D5F591",
        overflow: "hidden",    
        height: "8vh",  
        paddingTop: "100px",
        paddingBottom: "50px",
    },
    formContainer:{
        height: "6vh",
        width: "100%",
        position: "relative",
        padding:"4px",
        minWidth:"300px",
        borderRadius:"5px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1);",
        background: "rgba(255, 255, 255, .5)",
        border: "solid 1px rgba(255, 255, 255, 0.2)",
        backgroundClip: "padding-box",
        backdropFilter: "blur(5px)",
        zIndex: "2",
        display: "flex",
        
    },
    inputContainer:{
        padding: "1px",
        borderRadius: "5px",
        border: "none",
        width: "80%",
        outline: "none",
    },
    wrap:{
        background: "rgba(255, 255, 255, .5)",
        display: 'inline-block',
        boxShadow: "0px 1px 5px rgba(0, 0, 0.1)",
        borderRadius: "5px",
        justifyContent: "center",
        "& > *":{
            flex: 1,
            height: "40px",
            margin: "1px",
        },
    },
    iconButton:{
        marginTop: "4px",
        width: "10px",
        height: "10px",
    },
}));


export default (props) => {
 const classes = useStyles();
 const [input, setInput] = useState("")
 const [message, setMessage] = useState("")
 const [isOpen, setIsOpen] = useState(true);
 const inputHandler = (e) =>{
    setInput(e.target.value)
 }

 const submitHandler = (e) =>{
    e.preventDefault();
    if(input){
        firestore.collection("emails").add({
            email: input,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
        setMessage("Thanks for subscribing!!")
        setTimeout(()=> {
            setMessage("");
        }, 4000)
    }
 }
 if(!isOpen){
    return null
}
    return(
        <>
            <div className={classes.signUpContainer}>
            <Box p={1} mt={-5} mb={2} className={classes.wrap}>
            <Typography className="text-center">Subscribe to get latest jobs</Typography>
            <Form onSubmit={submitHandler} className={classes.formContainer}>
            <FilledInput className={classes.inputContainer} type="email" placeholder="Email" onChange={inputHandler} value={input}></FilledInput>
            <Button type="submit" className="text-white" variant="contained" disableElevation color="secondary">Submit</Button>
            <Typography><IconButton className={classes.iconButton}>
                <CloseIcon onClick={()=> setIsOpen(false)}/>
            </IconButton></Typography>
            </Form>
            {message && <Alert>{message}</Alert>}
        </Box>
            </div>
        </>
    )
}
*/