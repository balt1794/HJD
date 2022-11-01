import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";
import {Link} from "react-router-dom";



// react.school/material-ui

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: "#cfd0d2"
  },
  customHeight: {
    minHeight: 200
  },
  logo: {
    maxWidth: 100,
  },
  navbarBrand: {
    position: "relative",
    width: "170px",
    left: "15px",
    maxHeight:"75px",
  },
  offset: theme.mixins.toolbar
}));

export default props => {
  const classes = useStyles();
  const [example, setExample] = useState("primary");
  const isCustomColor = example === "customColor";
  const isCustomHeight = example === "customHeight";
  return (
    <React.Fragment>

      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/"><img src={"images/logo40.png"} alt="logo" width={100} height={40}></img> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Button href="/form" variant="outline-dark"  disableElevation>Post a job</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>


    </React.Fragment>
  );
}
