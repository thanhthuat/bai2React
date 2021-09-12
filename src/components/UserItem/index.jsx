import React, { useState } from 'react';
import { TableRow, TableCell, IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { delUser, updateUser } from '../../store/actions/users';
import { useDispatch } from 'react-redux';
import UpdateUser from '../UpdateUser';

function UserItem(props) {
    const { taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen } = props.user;
    const [openUpdateUser, setUpdateUser] = useState(false);
    const dispatch = useDispatch();
    const handleDel = () => {
        dispatch(delUser(taiKhoan));
    };
    const handleUpdate = () => {
        setUpdateUser(true)
    };
    return (
        <TableRow >
            <TableCell style={{padding:"0 5px"}} component="th" scope="row">
                <div style={{display:"flex"}}>  
                    <AccountCircleIcon style={{color:"green"}} color="primary" />    {taiKhoan}
                </div>
            </TableCell >
            <TableCell style={{padding:"0 5px"}} align="right">{matKhau}</TableCell >
            <TableCell style={{padding:"0 5px"}} align="right">{email}</TableCell >
            <TableCell style={{padding:"0 5px"}} align="right">{hoTen}</TableCell >
            <TableCell style={{padding:"0 5px"}} align="right">{soDt}</TableCell >
            <TableCell style={{padding:"0 5px"}} align="right">{maNhom}</TableCell >
            <TableCell style={{padding:"0 5px"}} align="right">{maLoaiNguoiDung}</TableCell >
            <TableCell style={{padding:"0 5px"}} align="right">
                <IconButton onClick={handleUpdate} color="primary" aria-label="Sửa">
                    <SettingsIcon />
                </IconButton>
                <IconButton onClick={handleDel} color="secondary" aria-label="Xóa">
                    <DeleteIcon />
                </IconButton>
            </TableCell >
            <UpdateUser user={props.user} openUpdateUser={openUpdateUser} setUpdateUser={setUpdateUser} />
        </TableRow>
    );
}

export default UserItem;