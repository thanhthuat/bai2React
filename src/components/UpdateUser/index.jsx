import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button, DialogContentText, DialogActions, FormControlLabel, Checkbox, Grid, Link, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
// import Alert from '@material-ui/lab/Alert';
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { updateUser } from '../../store/actions/users'

import { useDispatch } from 'react-redux';

const updateUserSchema = yup.object().shape({
    matKhau: yup.string().required('Field is required!'),
    email: yup.string().required('Field is required!').email('Email is invalid'),
    soDt: yup.string().required('Field is required!').matches(/^[0-9]+$/, 'Phone number is not valid'),
    hoTen: yup.string().required('Field is required!'),
    maNhom: yup.string().required('Field is required!'),
});

function UpdateUser(props) {

    const { openUpdateUser, setUpdateUser } = props;
    const { taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen } = props.user;
    const dispatch = useDispatch();

    const handleClose = () => {
        setUpdateUser(false);
    };

    const handleSubmit = (values) => {
        console.log(values);
        dispatch(updateUser(values,handleClose ));
    };
    return (
        <Dialog
            style={{ width: "50%", margin: "0 auto" }}
            open={openUpdateUser}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle variant="h4" id="alert-dialog-title" style={{ textAlign: "center" }}>UPDATE USER</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Formik
                        initialValues={{
                            taiKhoan: taiKhoan,
                            matKhau: matKhau,
                            email: email,
                            soDt: soDt,
                            maNhom: maNhom,
                            maLoaiNguoiDung: maLoaiNguoiDung,
                            hoTen: hoTen,
                        }}
                        validationSchema={updateUserSchema}
                        onSubmit={(values) => {
                            handleSubmit(values);
                        }}
                        render={(formikProps) => (
                            <Form noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="fname"
                                            name="taiKhoan"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="taiKhoan"
                                            label="Tài khoản"
                                            defaultValue={taiKhoan}
                                            autoFocus
                                            onChange={formikProps.handleChange}
                                            disabled
                                        />
                                        <ErrorMessage name="taiKhoan">
                                           
                                        </ErrorMessage>

                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="matKhau"
                                            label="Mật khẩu"
                                            name="matKhau"
                                            autoComplete="lname"
                                            onChange={formikProps.handleChange}
                                            defaultValue={matKhau}
                                        />
                                        <ErrorMessage name="matKhau">
                                          
                                        </ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12} sm={5}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="hoTen"
                                            label="Họ Tên"
                                            name="hoTen"
                                            autoComplete="lname"
                                            defaultValue={hoTen}
                                            onChange={formikProps.handleChange}
                                        />
                                        <ErrorMessage name="hoTen">
                                            {/* {(msg) => <Alert severity="warning">{msg}</Alert>} */}
                                        </ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth variant="outlined" style={{ margin: "spacing(1)" }}>
                                            <InputLabel style={{ backgroundColor: "white", padding: "0 5px" }} id="demo-simple-select-outlined-label">Mã Nhóm</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="maNhom"
                                                name="maNhom"
                                                defaultValue='GP01'
                                                onChange={formikProps.handleChange}
                                            >
                                                <MenuItem value="GP00">GP00</MenuItem>
                                                <MenuItem value="GP01">GP01</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                   

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            onChange={formikProps.handleChange}
                                            defaultValue={email}

                                        />
                                        <ErrorMessage name="email">
                                            {/* {(msg) => <Alert severity="warning">{msg}</Alert>} */}
                                        </ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="soDt"
                                            label="Số điện thoại"
                                            name="soDt"
                                            autoComplete="phone"
                                            onChange={formikProps.handleChange}
                                            defaultValue={soDt}

                                        />
                                        <ErrorMessage name="soDt">
                                            {/* {(msg) => <Alert severity="warning">{msg}</Alert>} */}
                                        </ErrorMessage>
                                    </Grid>
                                </Grid>
                                <Button
                                    style={{ marginTop: "16px" }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    UPDATE
                                </Button>
                            </Form>
                        )} />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default UpdateUser;