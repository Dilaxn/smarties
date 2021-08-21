import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Container, Grid} from '@material-ui/core';
import Drawing from "../images/Drawing.png";
import speaking from "../images/speaking.jpg"
import math from "../images/math.png"

export default function ReportSpeak(){
    return(
        <Container>
            <Grid  item style={{width:"100%",justifyContent:"center",paddingBottom:50}}>
                <Typography  align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Report of Speak with SMART'Es</Typography>
            </Grid>
            <Grid container md={10}>
                <Grid item md={3} style={{justifyContent:"center"}}>
                    <Typography align="center" style={{fontFamily:"Comic Sans MS",fontSize:25,padding:25,margin:2, border: "1px solid black",opacity:0.6}} >Activity</Typography>
                </Grid>
                <Grid item md={3} style={{justifyContent:"center"}}>
                    <Typography align="center" style={{fontFamily:"Comic Sans MS",fontSize:25,padding:25,margin:2, border: "1px solid black",opacity:0.6}} >Level</Typography>
                </Grid>
                <Grid item md={3} style={{justifyContent:"center"}}>
                    <Typography align="center" style={{fontFamily:"Comic Sans MS",fontSize:25,padding:25,margin:2, border: "1px solid black",opacity:0.6}} >Correct</Typography>
                </Grid>
                <Grid item md={3} style={{justifyContent:"center"}}>
                    <Typography align="center" style={{fontFamily:"Comic Sans MS",fontSize:25,padding:25,margin:2, border: "1px solid black",opacity:0.6}} >Total</Typography>
                </Grid>


                <Grid item md={3} style={{justifyContent:"center"}}>
                    <Typography align="center" style={{fontFamily:"Comic Sans MS",fontSize:25,padding:7,margin:2, border: "1px solid black",opacity:0.6}} >Object Identification</Typography>
                </Grid>
                <Grid item md={3} style={{justifyContent:"center"}}>
                    <Typography align="center" style={{fontFamily:"Comic Sans MS",fontSize:25,padding:25,margin:2, border: "1px solid black",opacity:0.6}} >2</Typography>
                </Grid>
                <Grid item md={3} style={{justifyContent:"center"}}>
                    <Typography align="center" style={{fontFamily:"Comic Sans MS",fontSize:25,padding:25,margin:2, border: "1px solid black",opacity:0.6}} >7</Typography>
                </Grid>
                <Grid item md={3} style={{justifyContent:"center"}}>
                    <Typography align="center" style={{fontFamily:"Comic Sans MS",fontSize:25,padding:25,margin:2, border: "1px solid black",opacity:0.6}} >10</Typography>
                </Grid>


                <Grid item md={3} style={{justifyContent:"center"}}>
                    <Typography align="center" style={{fontFamily:"Comic Sans MS",fontSize:25,padding:7,margin:2, border: "1px solid black",opacity:0.6}} >Words Pronunciation</Typography>
                </Grid>
                <Grid item md={3} style={{justifyContent:"center"}}>
                    <Typography align="center" style={{fontFamily:"Comic Sans MS",fontSize:25,padding:25,margin:2, border: "1px solid black",opacity:0.6}} >4</Typography>
                </Grid>
                <Grid item md={3} style={{justifyContent:"center"}}>
                    <Typography align="center" style={{fontFamily:"Comic Sans MS",fontSize:25,padding:25,margin:2, border: "1px solid black",opacity:0.6}} >5</Typography>
                </Grid>
                <Grid item md={3} style={{justifyContent:"center"}}>
                    <Typography align="center" style={{fontFamily:"Comic Sans MS",fontSize:25,padding:25,margin:2, border: "1px solid black",opacity:0.6}} >10</Typography>
                </Grid>
            </Grid>

        </Container>
    )
}