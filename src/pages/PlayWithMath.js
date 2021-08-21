import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Container, Grid} from '@material-ui/core';
import NumberIdentification from "../images/NumberIdentification.jpeg"
import Addition from "../images/Addition.jpeg"

export default function PlayWithMath(){
    return(
        <Container >
            <Grid container item style={{width:"100%",justifyContent:"center"}}>

                <Typography   style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Start Here</Typography>

                <Grid item container style={{paddingTop:20}} >
                    <Grid container item style={{justifyContent:"center" }} md={6}>
                        <Grid   item style={{justifyContent:"center" }}>
                            <img style={{padding:5,margin:2,maxWidth: "50%" }}  src={NumberIdentification} ></img>
                        </Grid>
                        <Typography  align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Number Identification</Typography>

                    </Grid>

                    <Grid container  item style={{justifyContent:"center" }} md={6}>
                        <Grid  item style={{justifyContent:"center" }}>
                            <img style={{padding:5,margin:2,maxWidth: "50%" }}  src={Addition} ></img>
                        </Grid>
                        <Typography  align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Addition</Typography>

                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}