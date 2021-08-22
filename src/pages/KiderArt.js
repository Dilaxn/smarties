import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Container, Grid} from '@material-ui/core';
import Fruit from "../images/Fruit.jpg";
import Animals from "../images/Animals.jpg"
import Shapes from "../images/Shapes.jpg"
import {useHistory} from "react-router";
import bg from "../images/bg.jpeg";

export default function KiderArt() {
    let history = useHistory()

    return (
        <Container>
            <Grid container item style={{backgroundImage: `url(${bg})`,backgroundOverlay:"black",width:"85%",backgroundPosition:"center",backgroundSize:"100%"}}>
            <Grid container style={{width: "100%", justifyContent: "center", paddingBottom: 0,backgroundColor:"rgba(255, 255, 255, 0.8)"}} item>
                <Grid item style={{width: "100%", justifyContent: "center", paddingBottom: 0}}>
                    <Typography align="center" style={{
                        maxWidth: "100%",
                        margin: 15,
                        paddingBottom:90,
                        opacity: 0.6,
                        fontFamily: "Comic Sans MS",
                        fontStyle: "italic",
                        fontSize: 35
                    }}>Start Here</Typography>
                </Grid>
                <Grid item container style={{paddingTop: 40,paddingBottom:50}}>
                    <Grid container onClick={
                        () => {
                            history.push({
                                pathname: '/letStart',
                                state: {detail: '/drawFruitTimeline',val:['Draw an apple1','Draw an apple2','Draw an apple3',
                                        'Draw an apple4','Draw an apple5','Draw an apple6','Draw an apple7','Draw an apple8',
                                        'Draw an apple9','Draw an apple10']}
                            })

                        }
                    } item style={{justifyContent: "center"}} md={4}>
                        <Grid item style={{justifyContent: "center"}}>
                            <img style={{padding: 5, margin: 2, maxWidth: "50%"}} src={Fruit}></img>
                        </Grid>
                        <Typography align="center" style={{
                            maxWidth: "100%",
                            margin: 15,
                            opacity: 0.6,
                            fontFamily: "Comic Sans MS",
                            fontStyle: "italic",
                            fontSize: 35
                        }}>Draw Fruits</Typography>

                    </Grid>

                    <Grid container onClick={
                        () => {
                            history.push({
                                pathname: '/letStart',
                                state: {detail: '/drawFruitTimeline',val:['Draw an circle 1','Draw an circle2','Draw an circle3',
                                        'Draw an circle4','Draw an circle5','Draw an circle 6','Draw an circle 7','Draw an circle8',
                                        'Draw an circle9','Draw an circle10']}
                            })

                        }
                    } item style={{justifyContent: "center"}} md={4}>
                        <Grid item style={{justifyContent: "center"}}>
                            <img style={{padding: 5, margin: 2, maxWidth: "50%"}} src={Shapes}></img>
                        </Grid>
                        <Typography align="center" style={{
                            maxWidth: "100%",
                            margin: 15,
                            opacity: 0.6,
                            fontFamily: "Comic Sans MS",
                            fontStyle: "italic",
                            fontSize: 35
                        }}>Draw Shapes</Typography>

                    </Grid>
                    <Grid container onClick={
                        () => {
                            history.push({
                                pathname: '/letStart',
                                state: {detail: '/drawFruitTimeline',val:['Draw an cat1','Draw an cat2','Draw an cat3',
                                        'Draw an cat4','Draw an cat5','Draw an cat6','Draw an cat7','Draw an cat8',
                                        'Draw an cat9','Draw an cat10']}
                            })

                        }
                    } item style={{justifyContent: "center"}} md={4}>
                        <Grid item style={{justifyContent: "center"}}>
                            <img style={{padding: 5, margin: 2, maxWidth: "50%"}} src={Animals}></img>
                        </Grid>
                        <Typography align="center" style={{
                            maxWidth: "100%",
                            margin: 15,
                            opacity: 0.6,
                            fontFamily: "Comic Sans MS",
                            fontStyle: "italic",
                            fontSize: 35
                        }}>Draw Animals</Typography>

                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Container>
    )
}