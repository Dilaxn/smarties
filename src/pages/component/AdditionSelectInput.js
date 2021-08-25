import React, {useEffect, useState} from "react";
import crypto from "crypto";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';

import {useIsMobileOrTablet} from "./utils/isMobileOrTablet";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 300,
            height: 100,
            fontSize: 90

        },
    },
}));

function Draw(props) {

    useEffect(() => {
        setX('')
        setCurrentValue('')
    }, [props])

    let [items, setItems] = useState([]);
    const isMobOrTab = useIsMobileOrTablet();
    const [img, setImg] = useState('')
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
    const [x, setX] = useState("")
    const [currentValue, setCurrentValue] = useState('')


    return (
        <container>
            <Grid container>
                <Grid item style={{width: "100%", justifyContent: "center", paddingBottom: 0}}>
                    <Typography align="center" style={{
                        maxWidth: "100%",
                        margin: 15,
                        opacity: 0.6,
                        fontFamily: "Comic Sans MS",
                        fontStyle: "italic",
                        fontSize: 35
                    }}>Addition</Typography>
                </Grid>
                <Grid container item>
                    <Typography align="center" style={{
                        maxWidth: "100%",
                        margin: 15,
                        opacity: 0.6,
                        fontFamily: "Comic Sans MS",
                        fontStyle: "italic",
                        fontSize: 35
                    }}
                    >{props.head}</Typography>
                </Grid>
                <Grid container item>
                    <Grid container item md={2}></Grid>
                    <Grid container item md={5}>

                        <Typography align="center"
                                    style={{fontFamily: "Comic Sans MS", fontSize: 100, margin: 1, opacity: 0.6}}>{props.a1} +
                            {props.a2} &nbsp; = </Typography>

                    </Grid>

                    <Grid container item md={4} style={{justifyContent: 'left', paddingBottom: 40, paddingTop: 20}}>

                        <TextField value={currentValue} onDrop={(event) => {
                            var data = event.dataTransfer.getData("Text");
                            setCurrentValue(data)
                        }} aria-dropeffect={true} style={{fontFamily: "Comic Sans MS", margin: 1, opacity: 0.8}}
                                   className={classes.root} id="filled-basic" variant="filled"/>

                    </Grid>

                </Grid>

                <Grid container item>
                    <Grid container item md={4}></Grid>
                    <Grid container item md={5}>
                        {props.ans.map((x)=>{
                            return(
                                <Grid item md={2} style={{justifyContent: "center"}}>
                                    <Typography onDragStart={(event) => {
                                        event.dataTransfer.setData("Text", event.target.id);
                                    }} draggable={true} id={x} align="center" value='4' style={{
                                        fontFamily: "Comic Sans MS",
                                        fontSize: 60,
                                        margin: 2,
                                        border: "1px solid black",
                                        opacity: 0.6
                                    }}>{x}</Typography>
                                </Grid>
                            )
                        })}



                    </Grid>
                </Grid>

            </Grid>

        </container>
    );
}

export default Draw
