import React, { useEffect } from "react";
import { Box, Button, Grid, FilledInput, Select, MenuItem, Typography, makeStyles, CircularProgress } from "@material-ui/core";
import { useState } from "react";
import { Form } from 'react-bootstrap';
import { app, db, storage } from "../../firebase/config";
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";


const initState = { 
    title: "",
    type: "Full Time",
    companyName: "",
    /*location: "Remote",
    companyUrl: "",
    country: "",
    city: "",
    state: "",
    zipcode: "",
    description: "",
    salarymin: "",
    salarymax: "",*/
    }

const JobForm = () => {

    const [jobDetails, setJobDetails] = useState(initState);
    const { title, type, companyName} = jobDetails
    const [file, setFile] = useState(null);
    const [progres, setProgres] = useState(null);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const navigate = useNavigate();


    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const uploadFile = () =>{
            const name =  new Date().getTime() + file.name;
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            
            uploadTask.on("state_changed", (snapshot) => {
                const progres = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                setProgres(progres);
                switch(snapshot.state){
                    case "paused":
                        console.log("Upload is Pause");
                        break;
                    case "running":
                        console.log("Runnings bish");
                        break;
                    default:
                        break;
                }
            }, (error) =>{
                console.log(error)
            },
            () =>{
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
                    setJobDetails((prev) => ({...prev, img: downloadURL}));
                })
            }
            );
        };
        file && uploadFile();
    }, [file])

   
    const handleChange = (e) => {
       setJobDetails({...jobDetails, [e.target.name]: e.target.value})
    };



   const handleSubmit = async (e) =>{
    e.preventDefault();
    setIsSubmit(true);
        await addDoc(collection(db, "jobs"), {
            ...jobDetails,
            timestamp: serverTimestamp()
        })
        navigate("/");
        
   };

    
    return(
        <>
           

        

            <div className="container mt-5 mb-5">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange}  name="title" value={jobDetails.title} autoComplete="off" placeholder="Job Title*" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Select onChange={handleChange} name="type" value={jobDetails.type} fullWidth disableUnderline variant = "filled">
                            <MenuItem value="Full Time">Full Time</MenuItem>
                            <MenuItem value="Part time">Part time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange}  name="companyName" value={jobDetails.companyName} autoComplete="off" placeholder="Company Name*" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <input label="Upload" type="file" onChange={(e) => setFile(e.target.files[0])}/>

                    </Grid>
                 
                   
                </Grid>
          
          
                <Box color="red" width="100%" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>*Required Fields</Typography>
                    <Button 
                    variant="contained" type="submit" disableElevation color="primary"  >
                    
                        
                                "Post Job"
                     
                        </Button>
                </Box>
               
                </form>
                </div>
              
           </>
    )
}

export default JobForm;