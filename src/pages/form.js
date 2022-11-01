import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import theme from "../theme/theme"
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/Job/JobCard";
import { Button, ThemeProvider, Grid, CircularProgress } from "@material-ui/core";
import NewJobModal from "../components/Job/NewJobModal";
//import { firestore, app } from "../components/firebase/config";
import ViewJobModal from "../components/Job/ViewJobModal";
import Navbar from "../components/Navbar";
import {Close as CloseIcon } from '@material-ui/icons'
import JobForm from "../components/Job/JobForm/index";

export default props => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);
  const [newJobModal, setNewJobModal] = useState(false);
  const [viewJob, setViewJob] = useState({});



    return(
        
      <ThemeProvider theme={theme}>
    <Navbar openNewJobModal={() => setNewJobModal(true)} />

    
    <JobForm closeModal={() => setNewJobModal(false)} newJobModal={newJobModal} /> 
    <ViewJobModal  job={viewJob} closeModal={() => setViewJob({})}/>
   
  </ThemeProvider>
  );
};