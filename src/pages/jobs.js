import React, { useEffect, useState } from "react";
import { Box, Card } from "@material-ui/core";
import { ThemeProvider, Grid } from "@material-ui/core";
import theme from "../theme/theme";
import Navbar from "../components/Navbar";
import { db } from "../components/firebase/config";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "jobs"),
      (snapshot) => {
        const list = [];

        snapshot.docs.forEach((doc) => {
          if (doc.data().status === "PUBLISHED")
            list.push({ id: doc.id, ...doc.data() });
        });
        setJobs(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box>
        <Grid>
          {jobs &&
            jobs.map((item) => (
              <Card key={item.id}>
                <img src={item.img} width={100} height={100} alt="Sss" />
                <h1>{item.companyName}</h1>
              </Card>
            ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
