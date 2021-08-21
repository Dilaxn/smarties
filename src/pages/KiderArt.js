import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Container, Grid} from '@material-ui/core';
import Fruit from "../images/Fruit.jpg";
import Animals from "../images/Animals.jpg"
import Shapes from "../images/Shapes.jpg"

export default function KiderArt(){
    return(
        <Container>
            <Grid container style={{width:"100%",justifyContent:"center",paddingBottom:0}}  item>
            <Grid  item style={{width:"100%",justifyContent:"center",paddingBottom:0}}>
                <Typography  align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Start Here</Typography>
            </Grid>
            <Grid item container style={{paddingTop:40}} >
                <Grid container item style={{justifyContent:"center" }} md={4}>
                    <Grid  item style={{justifyContent:"center" }}>
                    <img style={{padding:5,margin:2,maxWidth: "50%" }}  src={Fruit} ></img>
                    </Grid>
                    <Typography  align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Draw Fruits</Typography>

                </Grid>

                <Grid container  item style={{justifyContent:"center" }} md={4}>
                    <Grid  item style={{justifyContent:"center" }}>
                        <img style={{padding:5,margin:2,maxWidth: "50%" }}  src={Shapes} ></img>
                    </Grid>
                    <Typography  align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Draw Shapes</Typography>

                </Grid>
                <Grid container  item style={{justifyContent:"center" }} md={4}>
                    <Grid  item style={{justifyContent:"center" }}>
                        <img style={{padding:5,margin:2,maxWidth: "50%" }}  src={Animals} ></img>
                    </Grid>
                    <Typography  align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Draw Animals</Typography>

                </Grid>
            </Grid>
            </Grid>
        </Container>
    )
}