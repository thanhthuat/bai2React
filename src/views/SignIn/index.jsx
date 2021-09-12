import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from "formik";
import { signIn } from "../../store/actions/auth";
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://picsum.photos/500/500)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleCallback = () =>{
    props.history.push('/')
  }
  const handleSubmit = (values ) =>{
    dispatch(
      signIn(values, handleCallback)  
    );
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={{
              taiKhoan: "1234a",
              matKhau: "1234a345678",
            }}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            render={({ handleChange }) => (
              <Form>
                {/* email: "1234a@gmail.com"
                hoTen: "123a"
                maLoaiNguoiDung: "QuanTri"
                maNhom: null
                matKhau: "1234a345678" */}

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="taiKhoan"
                  label="Tài khoản"
                  name="taiKhoan"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                  defaultValue="1234a"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="matKhau"
                  label="Mật khẩu"
                  type="password"
                  id="matKhau"
                  autoComplete="current-password"
                  onChange={handleChange}
                  defaultValue="1234a345678"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                
              </Form>
            )}
          />
        </div>
      </Grid>
    </Grid>
  );
}