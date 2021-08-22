import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AdditionSelectInput from "./component/AdditionSelectInput";
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
    return( <AdditionSelectInput head={"1.Select the correct answer"} a1={'5'} a2={'2'} ans={['1','9','7','3','6']}/>);
}
function q2(){
    return( <AdditionSelectInput head={"2.Select the correct answer"} a1={'5'} a2={'2'} ans={['1','9','7','3','6']}/>);
}
function q3(){
    return( <AdditionSelectInput head={"3.Select the correct answer"} a1={'5'} a2={'2'} ans={['1','9','7','3','6']}/>);
}
function q4(){
    return( <AdditionSelectInput head={"4.Select the correct answer"} a1={'5'} a2={'2'} ans={['1','9','7','3','6']}/>);
}
function q5(){
    return( <AdditionSelectInput head={"5.Select the correct answer"} a1={'5'} a2={'2'} ans={['1','9','7','3','6']}/>);
}
function q6(){
    return( <AdditionSelectInput head={"6.Select the correct answer"} a1={'5'} a2={'2'} ans={['1','9','7','3','6']}/>);
}
function q7(){
    return( <AdditionSelectInput head={"7.Select the correct answer"} a1={'5'} a2={'2'} ans={['1','9','7','3','6']}/>);
}
function q8(){
    return( <AdditionSelectInput head={"8.Select the correct answer"} a1={'5'} a2={'2'} ans={['1','9','7','3','6']}/>);
}
function q9(){
    return( <AdditionSelectInput head={"9.Select the correct answer"} a1={'5'} a2={'2'} ans={['1','9','7','3','6']}/>);
}
function q10(){
    return( <AdditionSelectInput head={"10.Select the correct answer"} a1={'5'} a2={'2'} ans={['1','9','7','3','6']}/>);
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

export default function AdditionSelect() {
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
        <div className={classes.root}  style={{backgroundImage: `url(${bg})`,backgroundOverlay:"black",width:"85%",backgroundPosition:"center",backgroundSize:"100%"}}>
            <div style={{justifyContent: 'center',backgroundColor:"rgba(255, 255, 255, 0.85)",}}>
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
