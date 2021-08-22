import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NumberIdentifyInput from "../pages/component/NumberIdentifyInput"
import individualIntro1 from "../images/individualIntro1.png"
import draw1 from "../images/draw/draw1.png"
import Image from "../images/individualIntroBg.png";
import bg from "../images/bg.jpeg";
import level1 from "../images/level1.jpg";
import level2 from "../images/level2.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ["Question 1","Question 2","Question 3","Question 4","Question 5"];
}
//Question 1
function q1(){
    return( <NumberIdentifyInput head={"1.Check"} img={draw1}/>);
}
function q2(){
    return( <NumberIdentifyInput head={"2.Check"} img={individualIntro1}/>);
}
function q3(){
    return( <NumberIdentifyInput head={"3.Check"} img={individualIntro1}/>);
}
function q4(){
    return( <NumberIdentifyInput head={"4.Check"} img={individualIntro1}/>);
}
function q5(){
    return( <NumberIdentifyInput head={"5.Check"} img={individualIntro1}/>);
}
function q6(){
    return( <NumberIdentifyInput head={"6.Check"} img={draw1}/>);
}
function q7(){
    return( <NumberIdentifyInput head={"7.Check"} img={individualIntro1}/>);
}
function q8(){
    return( <NumberIdentifyInput head={"8.Check"} img={individualIntro1}/>);
}
function q9(){
    return( <NumberIdentifyInput head={"9.Check"} img={individualIntro1}/>);
}
function q10(){
    return( <NumberIdentifyInput head={"10.Check"} img={individualIntro1}/>);
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return q1();
        case 1:
            return q2();
        case 2:
            return q3();
        case 3:
            return q4();
        case 4:
            return q5();
        case 6:
            return q6();
        case 7:
            return q7();
        case 8:
            return q8();
        case 9:
            return q9();
        case 10:
            return q10();
        default:
            return 'Unknown stepIndex';
    }
}

export default function NumberIdentify() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [checkStep, setCheckStep] = React.useState(0);

    const steps = getSteps();
    const [steps1,setSteps1]=useState([{lab:"Question 1",num:1}, {lab:"Question 2",num:2}, {lab:"Question 3",num:3}, {lab:"Question 4",num:4}, {lab:"Question 5",num:5}])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setCheckStep((prevCheckStep) => prevCheckStep + 1);

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setCheckStep((prevCheckStep) => prevCheckStep - 1);

    };

    const handleReset = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setCheckStep((prevCheckStep) => prevCheckStep + 1);

        setSteps1([{lab:"Question 1",num:6}, {lab:"Question 2",num:7}, {lab:"Question 3",num:8}, {lab:"Question 4",num:9}, {lab:"Question 5",num:10}])
        setActiveStep(0);
    };
    const handleFinish = () => {

        setActiveStep(0);
        setCheckStep(0);
    };

    return (
        <div className={classes.root} style={{backgroundImage: `url(${bg})`,backgroundOverlay:"black",width:"85%",backgroundPosition:"center",backgroundSize:"100%"}}>
<div style={{justifyContent: 'center',backgroundColor:"rgba(255, 255, 255, 0.6)",}}>
            <div>
                {checkStep === 5 ? (
                    <div>
                        <img src={level1}/>
                        <Typography className={classes.instructions}>Level 1 completed</Typography>
                        <Button onClick={handleReset}>Next Level</Button>
                    </div>
                ) : (
                    checkStep === 11 ? (
                        <div>
                            <img src={level2}/>
                            <Typography className={classes.instructions}>Level 2 completed</Typography>
                            <Button onClick={handleFinish}>Finish</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(checkStep)}</Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )

                )}
            </div>
            {/*{activeStep === 5 ? (*/}
            {/*    <Stepper activeStep={activeStep} alternativeLabel>*/}
            {/*        {steps.map((label) => (*/}
            {/*            <Step key={label}>*/}
            {/*                <StepLabel>{label}</StepLabel>*/}
            {/*            </Step>*/}
            {/*        ))}*/}
            {/*    </Stepper>*/}
            {/*):(*/}
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps1.map((index,label) => (
                    <Step key={index['num']}>
                        <StepLabel>{index['lab']}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {/*)}*/}

        </div>
    </div>
    );
}
