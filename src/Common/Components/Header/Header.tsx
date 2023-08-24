import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ERouterPaths } from 'Router';

export const Header = () => {
    return (
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    MUI
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NavLink to={ERouterPaths.HOME}>HOME</NavLink>
                    <NavLink to={ERouterPaths.ABOUT}>ABOUT</NavLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
