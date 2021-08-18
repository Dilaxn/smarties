import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Container, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
// import {AlertSnack} from '../pages/component';
// import {AuthContext} from '../context/AuthContext';
import slogo from "../images/slogo.png"

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

const MainLayout = ({children}) => {
    const classes = useStyles();
    // const { alertMessage: authMessage, currentUser, logout} = useContext(AuthContext);

    // const messageData = () => {
    //     if (authMessage) {
    //         return authMessage;
    //     }
    // };

    const loginUserData = sessionStorage.getItem('user');
    const [loginUser, SetLoginUser] = useState(false);

    useEffect(() => {
        if (loginUserData !== null) {
            SetLoginUser(true);
        } else {
            SetLoginUser(false);
        }
    }, [loginUserData]);

    return (
        <container>
            <Grid item>
                {/*Header*/}
                <Grid container item>
                    <Grid container item style={{padding: 10, margin: 20, height: 80, border: "1px solid black"}}>
                        <Grid item md={5}>
                            <Grid item md={4} style={{justifyContent: "center"}}>
                                <Typography align="center" style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 10,
                                    margin: 2,
                                    border: "1px solid black"
                                }}>Home</Typography>
                            </Grid>

                        </Grid>
                        <Grid item style={{height: 60}} md={2}>
                            <img style={{padding: 5, margin: 2, maxWidth: "80%", opacity: 0.8}} src={slogo}></img>
                        </Grid>
                        <Grid container item md={5}>
                            <Grid item md={4} style={{justifyContent: "center"}}>
                                <Typography align="center" style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 10,
                                    margin: 2,
                                    border: "1px solid black"
                                }}>Courses</Typography>
                            </Grid>
                            <Grid item md={4} style={{justifyContent: "center"}}>
                                <Typography align="center" style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 10,
                                    margin: 2,
                                    border: "1px solid black"
                                }}>Login</Typography>
                            </Grid>
                            <Grid item md={4} style={{justifyContent: "center"}}>
                                <Typography align="center" style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 10,
                                    margin: 2,
                                    border: "1px solid black"
                                }}>SignUp</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item style={{paddingTop: 0, height: window.innerHeight * 0.755}}>
                    {/*Sidebar Section*/}

                    <Grid container item md={2} style={{justifyContent: "center"}}>
                        <Grid container item style={{justifyContent: "center", backgroundColor: "#1986aa", margin: 20}}>
                            <Grid align="center" item style={{paddingTop: 0, width: "100%", marginBottom: 0}}>
                                <Typography align="center" style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 20,
                                    margin: 15,
                                    backgroundColor: "white"
                                }}>Profile</Typography>
                                <Typography align="center" style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 20,
                                    margin: 15,
                                    backgroundColor: "white"
                                }}>Progress</Typography>
                                <Typography align="center" style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 20,
                                    margin: 15,
                                    backgroundColor: "white"
                                }}>Parent</Typography>
                                <Grid align="center"
                                      style={{fontFamily: "papyrus", fontWeight: "bold", padding: 20, margin: 15}}>

                                </Grid>
                                <Typography align="center" style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 20,
                                    margin: 15,
                                    backgroundColor: "white"
                                }}>Progress</Typography>
                                <Typography align="center" style={{
                                    fontFamily: "papyrus",
                                    fontWeight: "bold",
                                    padding: 20,
                                    margin: 15,
                                    backgroundColor: "white"
                                }}>Parent</Typography>


                            </Grid>


                        </Grid>
                    </Grid>

                    {/*Page Section*/}
                    <Grid container item md={10} style={{justifyContent: "center"}}>

                        <Grid container item align="center" style={{justifyContent: "center"}}>
                            <Grid align="center" item style={{
                                margin: 'auto',
                                alignItems: "center",
                                width: "100%",
                                justifyContent: "center",
                            }}>
                                <Grid style={{margin: 'auto'}} item backgroundColor="black">
                                    {children}
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

                {/*Footer*/}
                <Grid container item>
                    <Grid container item style={{
                        justifyContent: "center",
                        padding: 10,
                        margin: 20,
                        height: 40,
                        border: "1px solid black"
                    }}>
                        <Typography align="center">Copyright 2021, SMARTIES', All Rights Reserved</Typography>

                    </Grid>
                </Grid>
            </Grid>
        </container>
    );
};

export default MainLayout;