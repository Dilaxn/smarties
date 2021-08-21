import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import mainImag from "../images/mainImag.jpg";



export default function Home() {

    return (
        <container >
            <Grid container style={{justifyContent: 'center',height:"100%"}}>
            <Grid container  item >
                    <Grid container item>
                        <Grid container md={3}>
                        </Grid>
                        <Grid item md={6}>
                            <Grid  item style={{width:"100%",justifyContent:"center",paddingBottom:0}}>
                                <Typography  align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Join Smarties</Typography>
                            </Grid>
                            <Grid  item style={{paddingTop:35,width:"100%",justifyContent:"center",paddingBottom:0}}>
                                <Typography  align="center" style={{  maxWidth: "80%",fontFamily:"Comic Sans MS",fontStyle:"italic",color:"white",padding:20,fontSize:30,margin:15,backgroundColor:"#1986aa",opacity:0.4}} >Grade 1</Typography>
                                <Typography  align="center" style={{  maxWidth: "80%",fontFamily:"Comic Sans MS",fontStyle:"italic",color:"white",padding:20,fontSize:30,margin:15,backgroundColor:"#1986aa",opacity:0.4}} >Grade 2</Typography>
                                <Typography  align="center" style={{  maxWidth: "80%",fontFamily:"Comic Sans MS",fontStyle:"italic",color:"white",padding:20,fontSize:30,margin:15,backgroundColor:"#1986aa",opacity:0.4}} >Grade 3</Typography>


                            </Grid>

                        </Grid>
                        <Grid container md={3}>
                        </Grid>
                    </Grid>

            </Grid>
            </Grid>
        </container>
    );
}