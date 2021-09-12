import React from 'react';
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer(props) {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <FacebookIcon />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <TwitterIcon />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <YouTubeIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;