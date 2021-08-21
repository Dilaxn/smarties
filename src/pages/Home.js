import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
// import {AlertSnack} from '../pages/component';
// import {AuthContext} from '../context/AuthContext';

import mainImag from "../images/mainImag.jpg"
import slogo from "../images/slogo.png"
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOpenOutlined from "@material-ui/icons/LockOpenOutlined";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import themeX from "../theme";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    headerBar: {
        display: 'flex',
        marginTop: '6rem'
    },
    main: {
        display: 'flex',
        minHeight: window.innerHeight
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <container>
            <Grid item >
                <Grid container item  >
                    <Grid container item style={{justifyContent: 'center',height:"100%"}}>
                        <Grid item md={6}>
                                <img style={{padding:5,margin:2,maxWidth: "100%",opacity:0.8}}  src={mainImag}></img>
                        </Grid>
                        <Grid container item md={6} style={{justifyContent:"center"}} >
                            <img style={{padding:5,margin:2,maxWidth: "50%",maxHeight:"15%",opacity:0.6}}  src={slogo} ></img>
                            <Grid  item style={{width:"100%",justifyContent:"center",paddingBottom:0}}>
                                <Typography  align="center" style={{  maxWidth: "60%",margin:15,opacity:0.6 , fontSize:20}} >A smart way to recommend primary student(Grade 1-3) course using  their skills.</Typography>
                            </Grid>
                            <Grid  item style={{paddingTop:35,width:"100%",justifyContent:"center",paddingBottom:0}}>
                                <Typography  align="center" style={{  maxWidth: "50%",fontFamily:"papyrus",color:"white",fontWeight:"bold",padding:20,margin:15,backgroundColor:"#1986aa"}} >Kinder Art</Typography>
                                <Typography  align="center" style={{  maxWidth: "50%",fontFamily:"papyrus",color:"white",fontWeight:"bold",padding:20,margin:15,backgroundColor:"#1986aa"}} >Play With Math</Typography>
                                <Typography  align="center" style={{  maxWidth: "50%",fontFamily:"papyrus",color:"white",fontWeight:"bold",padding:20,margin:15,backgroundColor:"#1986aa"}} >Take With Smarties'</Typography>


                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </container>
    );
}