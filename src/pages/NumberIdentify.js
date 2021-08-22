import React from 'react';
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

export default function NumberIdentify() {
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
        <div className={classes.root} style={{backgroundImage: `url(${Image})`,
            backgroundPosition: 'center',backgroundSize:"60%",backgroundRepeat  : 'no-repeat',}}>
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
