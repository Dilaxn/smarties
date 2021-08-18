import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOpenOutlined from '@material-ui/icons/LockOpenOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import themeX from "../theme/index"
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(3),
        backgroundColor: themeX.palette.primary.main,
   fontSize:"large"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {
    const classes = useStyles();

    return (
        <Container style={{justifyContent: 'center',paddingBottom:100,height:"100%"}} component="main"  >
            <CssBaseline />
<Grid item container>
<Grid container md={3}>
</Grid>
    <Grid container md={6}>
        <Grid item >
            <Typography style={{fontFamily:"papyrus",fontWeight:"bold",fontSize:"30px",margin:40}}> SignIn</Typography>
            <Avatar  fontSize="large" className={classes.avatar}>
                <LockOpenOutlined />
            </Avatar>
            <hr align="center" style={{width:"50%",}}/>
            <form  className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    borderColor="black"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color={themeX.palette.primary.main} />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color={themeX.palette.primary.main}
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item md={6} justifyContent="left"
                    >
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item md={6}>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    </Grid>
    <Grid container md={3}>
    </Grid>
</Grid>
        </Container>
    );
}