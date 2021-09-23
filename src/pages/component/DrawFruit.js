import React, {useEffect, useState} from "react";

import CanvasDraw from "react-canvas-draw";
import crypto from "crypto";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { saveAs } from 'file-saver';
import { useIsMobileOrTablet } from "./utils/isMobileOrTablet";
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

function Draw(props) {
    console.log(props)
    let [items, setItems] = useState([]);
    const isMobOrTab = useIsMobileOrTablet();
    const [img,setImg]=useState('')
    const [img1,setImg1]=useState(null)

    let saveableCanvas = null;
    function onSave() {
        var canvas = document.getElementById("mycanvas");
        let id = crypto.randomBytes(4);
        setImg(saveableCanvas.getSaveData())
        localStorage.setItem("savedDrawing-" + id, img);
        const d = saveableCanvas.canvasContainer.children[1].toDataURL();
        console.log("d:"+d)
        setImg1(d)
        items.push(id);
        const a = document.createElement("a");
        a.download = "download.png";
        a.href = saveableCanvas.canvasContainer.children[1].toDataURL();
        a.click();
        setItems(items);
        saveableCanvas.clear();
    }

    useEffect(()=>{
        saveableCanvas.clear();
    },[props])

    const [isOpen, setOpen] = useState(false)

    return (
        <React.Fragment>
        <container>
            <Grid container item>
                <Typography align="center" style={{  maxWidth: "100%",margin:15,opacity:0.6 ,fontFamily:"Comic Sans MS",fontStyle:"italic", fontSize:35}}
                >{props.head}</Typography>
            </Grid>
            <Grid container style={{justifyContent: 'center',height:"100%"}}>
                <Grid container item md={3} style={{justifyContent: 'center'}}>

                    <div className="App">

                        <CanvasDraw
                            ref={(canvasDraw) => (saveableCanvas = canvasDraw)}
                            canvasWidth={350}
                            canvasHeight={350}
                            hideGrid
id='mycanvas'
                            brushRadius={5}
                            style={{
                                boxShadow:
                                    "0 3px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)"
                            }}
                        />
                        <button onClick={onSave}>Save</button>
                        <button onClick={onSave}>Check</button>

                        <ModalVideo style={{width: '100%'}} channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

                        <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>

                    </div>

                </Grid>
                <Grid container item md={1}></Grid>
            </Grid>
        </container>
        </React.Fragment>
    );
}

export default Draw
