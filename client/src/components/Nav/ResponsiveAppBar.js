import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import { CardActions } from "@mui/material";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const authenticated = ['Products', 'Add-Product', 'Sign-Out'];
const unauthenticatedOptions = ['Products', 'Sign-In', 'Sign-Up'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Nav = ({ user }) => {
  return (
    <nav>
      <div className='links'>
        {user && (
          <div className='link welcome'>Bonjour, {user.username}</div>
        )}
        {user ? (
          <ResponsiveAppBar options={authenticated} />
        ) : (
          <ResponsiveAppBar options={unauthenticatedOptions} />
        )}
      </div>
    </nav>
  );
};


const ResponsiveAppBar = ({ options }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: '#c8e7ff',
        maxHeight: '20vh',
        paddingBottom: '5%',
      }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* //the logo */}
          <Container maxWidth='sm'>
            <Box>
              <CardActions>
                <NavLink to='/'>
                  <CardMedia
                    style={{
                      height: 'auto',
                      width: 'auto',
                      maxHeight: '20vh',
                    }}
                    component='img'
                    image='https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/logo/logo.png'
                    alt='logo'
                  />
                </NavLink>
              </CardActions>
            </Box>
          </Container>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {options.map((page) => (
                <CardActions>
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}>
                    <NavLink to={`/${page}`}>
                      <Typography
                        textAlign='center'
                        sx={{
                          display: {
                            xs: 'block',
                            md: 'none',
                          },
                        }}>
                        {page}
                      </Typography>
                    </NavLink>
                  </MenuItem>
                </CardActions>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}>
            {options.map((page) => (
              <CardActions>
                <Button
                  component={NavLink}
                  to={`/${page}`}
                  variant='outlined'
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: 'black',
                    display: 'block',
                    margin: 'auto',
                  }}>
                  {page}
                </Button>
              </CardActions>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}>
                <Avatar
                  alt='user'
                  src='https://raw.githubusercontent.com/KaleChip24/everywear-threads/zz-dev/assets/icons/nav.png'
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;