import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import crypto from "crypto";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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
            <Grid container>
                <Grid  item style={{width:"100%",justifyContent:"center",paddingBottom:0}}>
                    <Typography  align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}} >Addition</Typography>
                </Grid>
                <Grid container item>
                    <Typography align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}}
                    >{props.head}</Typography>
                </Grid>
                <Grid container item md={2}></Grid>
                <Grid container item md={6}>
                            <img src={props.img}/>
                </Grid>

                <Grid container item md={4} style={{justifyContent: 'left' ,paddingTop:40}}>

                    <TextField className={classes.root} id="filled-basic" label="Answer" variant="filled" />

                </Grid>
                <Grid container item md={1}></Grid>
            </Grid>
        </container>
    );
}

export default Draw
