import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LogoutIcon from '@mui/icons-material/Logout';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      color: 'red'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
  }));
  
  function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction={"down"} in={!trigger}>
        {children}
      </Slide>
    );
  }

const AdminNavbar = (props) => {

  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
    return (  
    <div className={classes.root}>
      <HideOnScroll {...props}>
          <AppBar>
            <Toolbar>
              <Typography
                variant="h5"
                component="p"
                className={classes.title}
                
              >
                Plagiarism Checker
              </Typography>
              {isMobile ? (
                <>
                  <IconButton
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                  >
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/"
                    >
                      <ListItemIcon>
                        <AddCircleIcon  />
                      </ListItemIcon>
                      <Typography variant="h6"> Add Faculty</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/College"
                    >
                      <ListItemIcon>
                        <ReviewsIcon />
                      </ListItemIcon>
                      <Typography variant="h6" > View Reports </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/About"
                    >
                      <ListItemIcon>
                        <LogoutIcon />
                      </ListItemIcon>
                      <Typography variant="h6" >LogOut</Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div style={{ marginRight: "2rem" }}>
                  <Button
                    variant="text"
                    component={Link}
                    to="/"
                    style={{color: '#FFFFFF'}}
                    
                  >
                    <AddCircleIcon />
                    Add Faculty
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/College"
                    style={{color: '#FFFFFF'}}
                  
                  >
                    <ReviewsIcon />
                    View Reports
                  </Button>
                  
                  <Button
                    variant="text"
                    component={Link}
                    to="/Personal"
                    style={{color: '#FFFFFF'}}
                  >
                    <LogoutIcon />
                    Logout
                  </Button>
                </div>
              )}
            </Toolbar>
          </AppBar>
        
      </HideOnScroll>
    </div>
    );
}
 
export default AdminNavbar;