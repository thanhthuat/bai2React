import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button, DialogContentText, DialogActions, FormControlLabel, Checkbox, Grid, Link, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
// import Alert from '@material-ui/lab/Alert';
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/actions/users'

const addUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('Field is required!'),
    matKhau: yup.string().required('Field is required!'),
    email: yup.string().required('Field is required!').email('Email is invalid'),
    soDt: yup.string().required('Field is required!').matches(/^[0-9]+$/, 'Phone number is not valid'),
    hoTen: yup.string().required('Field is required!'),
});

function AddUser(props) {
    const { openAddUser, setAddUser } = props;
    const dispatch = useDispatch();
    const handleClose = () => {
        setAddUser(false);
    };
    const handleSubmit = (values) => {
        dispatch(addUser(values,handleClose));
    };
    return (
        <Dialog
            style={{ width: "50%", margin: "0 auto" }}
            open={openAddUser}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle variant="h4" id="alert-dialog-title" style={{ textAlign: "center" }}>ADD USER</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Formik
                        initialValues={{
                            taiKhoan: "",
                            matKhau: "",
                            email: "",
                            soDt: "",
                            maNhom: "GP01",
                            maLoaiNguoiDung: "KhachHang",
                            hoTen: "",
                        }}
                        validationSchema={addUserSchema}
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
                                            autoFocus
                                            onChange={formikProps.handleChange}
                                        />
                                        <ErrorMessage name="taiKhoan">
                                            {/* {(msg) => <Alert severity="warning">{msg}</Alert>} */}
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
                                        />
                                        <ErrorMessage name="matKhau">
                                            {/* {(msg) => <Alert severity="warning">{msg}</Alert>} */}
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
                                            onChange={formikProps.handleChange}
                                        />
                                        <ErrorMessage name="hoTen">
                                            {/* {(msg) => <Alert severity="warning">{msg}</Alert>} */}
                                        </ErrorMessage>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                    <FormControl fullWidth variant="outlined" style={{ margin: "spacing(1)" }}>
                                            <InputLabel style={{ backgroundColor: "white", padding: "0 5px" }} id="demo-simple-select-outlined-label">Mã Nhóm</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="maNhom"
                                                name="maNhom"
defaultValue="GP01"
                                                onChange={formikProps.handleChange}
                                            >
                                                <MenuItem value="GP00">GP00</MenuItem>
                                                <MenuItem value="GP01">GP01</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <ErrorMessage name="maNhom">
                                            {/* {(msg) => <Alert severity="warning">{msg}</Alert>} */}
                                        </ErrorMessage>
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <FormControl fullWidth variant="outlined" style={{ margin: "spacing(1)" }}>
                                            <InputLabel style={{ backgroundColor: "white", padding: "0 5px" }} id="demo-simple-select-outlined-label">Loại người dùng</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="maLoaiNguoiDung"
                                                name="maLoaiNguoiDung"
                                                defaultValue="KhachHang"
                                                onChange={formikProps.handleChange}
                                            >
                                                <MenuItem value="QuanTri">QuanTri</MenuItem>
                                                <MenuItem value="KhachHang">KhachHang</MenuItem>

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
                                    Thêm
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

export default AddUser;