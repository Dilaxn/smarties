import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import slogo from "../images/slogo.png";
import mainImag from "../images/mainImag.jpg"



export default function  LetStart(){

    return(
        <Container>
            <Grid item>
                <Grid container item>
                    <Grid container md={6}>
                        <img style={{padding:5,margin:2,maxWidth: "100%",opacity:0.8}}  src={mainImag}></img>
                    </Grid>
                    <Grid container md={6} >

                        <Grid container item style={{width:"100%",height:"10%",justifyContent:"center" , paddingTop:150}}>
                            <Typography  align="center" style={{  maxWidth: "100%",fontFamily:"Comic Sans MS",fontStyle:"italic",color:"white",paddingLeft:100,paddingBottom:30,paddingTop:30,paddingRight:100,fontSize:30,margin:15,backgroundColor:"#1986aa"}} >Let's Start</Typography>
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}