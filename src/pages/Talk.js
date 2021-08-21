import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Container, Grid} from '@material-ui/core';
import Object from "../images/Object.jpg";
import Pronunciation from "../images/Pronunciation.png"

export default function Talk(){
    return(
        <Container >
            <Grid container item style={{width:"100%",justifyContent:"center"}}>

                <Typography   style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Start Here</Typography>

            <Grid item container style={{paddingTop:20}} >
                <Grid container item style={{justifyContent:"center" }} md={6}>
                    <Grid   item style={{justifyContent:"center" }}>
                        <img style={{padding:5,margin:2,maxWidth: "50%" }}  src={Object} ></img>
                    </Grid>
                    <Typography  align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Object Identification</Typography>

                </Grid>

                <Grid container  item style={{justifyContent:"center" }} md={6}>
                    <Grid container item style={{justifyContent:"center" }}>
                        <img style={{padding:5,margin:2,maxWidth: "50%" }}  src={Pronunciation} ></img>
                    </Grid>
                    <Typography  align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Pronunciation</Typography>

                </Grid>
            </Grid>
            </Grid>
        </Container>
    )
}