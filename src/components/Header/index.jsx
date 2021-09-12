import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '../../store/actions';
import { actionType } from '../../store/actions/type';

function Header(props) {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    localStorage.clear();
    props.signOut();
    dispatch(createAction(actionType.DEL_USER, []));
  }
  const {taiKhoan} = useSelector((state)=>{
        return state.auth || [];
  })
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <AssignmentIndIcon /> Manage Users
        </IconButton>
        <Typography style={{ flexGrow: "1", }} variant="h6" >
        </Typography>
        <Typography>
          Hello, {taiKhoan}<Button style={{marginLeft:"10px"}}color="secondary" variant="contained" onClick={handleSignOut}>Logout</Button></Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;