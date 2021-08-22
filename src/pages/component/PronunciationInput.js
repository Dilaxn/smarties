import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import crypto from "crypto";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import MicIcon from '@material-ui/icons/Mic';

import { useIsMobileOrTablet } from "./utils/isMobileOrTablet";
import individualIntro2 from "../../images/individualIntro2.png";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 300,
            height: 150,
            fontSize:50,

        },
    },
}));
function Draw(props) {
    console.log(props)
    let [items, setItems] = useState([]);
    const isMobOrTab = useIsMobileOrTablet();
    const [img,setImg]=useState('')
    let saveableCanvas = null;
    function onSave() {
        var canvas = document.getElementById("mycanvas");
        let id = crypto.randomBytes(4);
        setImg(saveableCanvas.getSaveData())
        localStorage.setItem("savedDrawing-" + id, img);
        items.push(id);
        setItems(items);
        saveableCanvas.clear();
    }
    const classes = useStyles();



    return (
        <container>
            <Grid container style={{marginBottom:40}}>
                <Grid  item style={{width:"100%",justifyContent:"center",paddingBottom:40}}>
                    <Typography  align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Addition</Typography>
                </Grid>

                <Grid container item>
                    <Grid container item md={1} ></Grid>
                    <Grid container item md={5}  >
                        <Grid container item>
                            <Typography align="center" style={{  maxWidth: "100%",opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}}
                            >{props.head}</Typography>
                        </Grid>
                        <Typography align="center" style={{  maxWidth: "100%",opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:50}}
                        >Cat</Typography>

                    </Grid>

                    <Grid container item md={4} style={{justifyContent: 'center' }}>
                        <Grid  item style={{width: "100%",}}>
                            <Typography  align="center" style={{  width: "100%",opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Answer</Typography>
                        </Grid>
                        <Grid container item style={{justifyContent: 'center' }}>
                            <Grid item md={3} style={{marginTop: 10}}>
                                <MicIcon fontSize="large" />
                            </Grid>
                            <Grid item md={9}>
                                <Typography align="center" style={{fontFamily:"Comic Sans MS",fontSize:20,padding:10, border: "1px solid black",opacity:0.6}} >......</Typography>

                            </Grid>

                        </Grid>


                    </Grid>


                </Grid>
            </Grid>
        </container>
    );
}

export default Draw
