import React, { useEffect, useState } from 'react';
import UserItem from '../UserItem';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Container, Typography, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import AddUser from '../AddUser';

function UserList(props) {
    const [openAddUser, setAddUser] = useState(false);
    const dispatch = useDispatch();

    const users = useSelector((state) => {
        return state.users.userList || [];
    });
    const handleAddUser = () => {
        setAddUser(true);
    }
    return (
        <Container maxWidth="lg">
            <Typography component="h5" variant="h5" align="left" gutterBottom style={{ marginTop: "16px" }}>
                Danh Sách Tài Khoản <Button onClick={handleAddUser} variant="contained" color="primary">
                    + ADD USER
                </Button>
            </Typography>

            <TableContainer >
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Tài khoản</TableCell >
                            <TableCell align="right">Mật khẩu</TableCell >
                            <TableCell align="right">Email</TableCell >
                            <TableCell align="right">Tên</TableCell >
                            <TableCell align="right">SDT</TableCell >
                            <TableCell align="right">Mã nhóm</TableCell >
                            <TableCell align="right">Mã loại người dùng</TableCell >
                            <TableCell align="right">Action</TableCell >
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users.map((item, index) => {
                                return <UserItem key={index} user={item} />
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <AddUser openAddUser={openAddUser} setAddUser={setAddUser} />
        </Container>
    );
}

export default UserList;