import React, {useState} from 'react';
import {createMuiTheme, makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NumberIdentifyInput from "../pages/component/NumberIdentifyInput"
import NumberIdentification01 from "../images/NumberIdentify/NumberIdentification01.png"
import NumberIdentification02 from "../images/NumberIdentify/NumberIdentification02.png"
import NumberIdentification03 from "../images/NumberIdentify/NumberIdentification03.png"
import NumberIdentification04 from "../images/NumberIdentify/NumberIdentification04.png"
import NumberIdentification05 from "../images/NumberIdentify/NumberIdentification05.png"
import NumberIdentification06 from "../images/NumberIdentify/NumberIdentification06.png"
import NumberIdentification07 from "../images/NumberIdentify/NumberIdentification07.png"
import NumberIdentification08 from "../images/NumberIdentify/NumberIdentification08.png"
import NumberIdentification09 from "../images/NumberIdentify/NumberIdentification09.png"
import NumberIdentification10 from "../images/NumberIdentify/NumberIdentification010.png"

import bg from "../images/bg.jpeg";
import level1 from "../images/level1.jpg";
import level2 from "../images/level2.jpg";

import themeX from "../theme";

const theme = createMuiTheme({
    overrides: {
        MuiStepIcon: {
            root: {
                '&$completed': {
                    color: themeX.palette.primary.main,
                },
                '&$active': {
                    color: themeX.palette.primary.main,
                },
            },
            active: {},
            completed: {},
        }
    }
})

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
    return ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"];
}

//Question 1
function q1() {
    return (<NumberIdentifyInput head={"1.How many balloons?"} img={NumberIdentification01}/>);
}

function q2() {
    return (<NumberIdentifyInput head={"2.How many books?"} img={NumberIdentification02}/>);
}

function q3() {
    return (<NumberIdentifyInput head={"3.How many penguins?"} img={NumberIdentification03}/>);
}

function q4() {
    return (<NumberIdentifyInput head={"4.How many fish?"} img={NumberIdentification04}/>);
}

function q5() {
    return (<NumberIdentifyInput head={"5.How many balls?"} img={NumberIdentification05}/>);
}

function q6() {
    return (<NumberIdentifyInput head={"6.How many pencils?"} img={NumberIdentification06}/>);
}

function q7() {
    return (<NumberIdentifyInput head={"7.How many umbrellas?"} img={NumberIdentification07}/>);
}

function q8() {
    return (<NumberIdentifyInput head={"8.How many dogs?"} img={NumberIdentification08}/>);
}

function q9() {
    return (<NumberIdentifyInput head={"9.How many hats?"} img={NumberIdentification09}/>);
}

function q10() {
    return (<NumberIdentifyInput head={"10.How many ships?"} img={NumberIdentification10}/>);
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
    const [steps1, setSteps1] = useState([{lab: "Question 1", num: 1}, {lab: "Question 2", num: 2}, {
        lab: "Question 3",
        num: 3
    }, {lab: "Question 4", num: 4}, {lab: "Question 5", num: 5}])

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

        setSteps1([{lab: "Question 1", num: 6}, {lab: "Question 2", num: 7}, {
            lab: "Question 3",
            num: 8
        }, {lab: "Question 4", num: 9}, {lab: "Question 5", num: 10}])
        setActiveStep(0);
    };
    const handleFinish = () => {

        setActiveStep(0);
        setCheckStep(0);
    };

    return (
        <div className={classes.root} style={{
            backgroundImage: `url(${bg})`,
            backgroundOverlay: "black",
            width: "85%",
            backgroundPosition: "center",
            backgroundSize: "100%"
        }}>
            <div style={{justifyContent: 'center', backgroundColor: "rgba(255, 255, 255, 0.8)",}}>
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
                                    <Button variant="contained"
                                            style={{color: 'white', backgroundColor: themeX.palette.primary.main}}
                                            color="primary" onClick={handleNext}>
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
                <MuiThemeProvider theme={theme}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps1.map((index, label) => (
                            <Step key={index['num']}>
                                <StepLabel style={{color: 'red'}}>{index['lab']}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </MuiThemeProvider>
                {/*)}*/}

            </div>
        </div>
    );
}
