import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CubeClubLogo from '../assets/images/logo.png';

const pages = [
  { path: '/', name: 'Home' },
  { path: '/resources', name: 'Resources' },
  { path: '/members', name: 'Members' },
  { path: '/rankings', name: 'Rankings' },
  { path: 'https://decal.rouxl.es', name: 'DeCal' },
];

function ResponsiveAppBar({ toggleDarkMode }: any) {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  const handleOpenMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const isCurrentPage = (path: string) => {
    return location.pathname === path;
  };

  if (isCurrentPage('/404')) {
    return null;
  }

  return (
      <AppBar position="sticky">
        <Toolbar>
          <Box
            component="div"
            sx={{
              display: { xs: 'none', md: 'flex', height: '100%', overflow: 'hidden' },
              mr: 1,
            }}
          >
            <img
              src={CubeClubLogo}
              alt="Logo"
              style={{ maxHeight: '100%', height: '32px', width: 'auto' }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
            >
              Cal Cube Club
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseMenu}
                  selected={isCurrentPage(page.path)}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                component={Link}
                to={page.path}
                color="inherit"
                sx={{ '&.active': { fontWeight: 'bold' } }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* <IconButton
            color="inherit"
            aria-label="toggle dark mode"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton> */}
        </Toolbar>
      </AppBar>
  );
}

export default ResponsiveAppBar;