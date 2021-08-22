import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Addition01 from "../images/addition/Typing/addition01.png"
import Addition02 from "../images/addition/Typing/addition02.png"
import Addition03 from "../images/addition/Typing/addition03.png"
import Addition04 from "../images/addition/Typing/addition04.png"
import Addition05 from "../images/addition/Typing/addition05.png"
import AdditionTypingInput from "./component/AdditionTypingInput";

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
    return( <AdditionTypingInput head={"1.Count the two sets of objects and type it..."} img={Addition01}/>);
}
function q2(){
    return( <AdditionTypingInput head={"2.Count the two sets of objects and type it..."} img={Addition02}/>);
}
function q3(){
    return( <AdditionTypingInput head={"3.Count the two sets of objects and type it..."} img={Addition03}/>);
}
function q4(){
    return( <AdditionTypingInput head={"4.Count the two sets of objects and type it..."} img={Addition04}/>);
}
function q5(){
    return( <AdditionTypingInput head={"5.Count the two sets of objects and type it..."} img={Addition05}/>);
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
        default:
            return 'Unknown stepIndex';
    }
}

export default function AdditionTyping() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root} >
            <div style={{justifyContent: 'center',backgroundColor:"rgba(255, 255, 255, 0.6)",}}>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>All Questions completed</Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
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
                    )}
                </div>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
        </div>
    );
}
