import React from 'react';
import clsx from 'clsx';
import About from '../about';
import Home from '../home';
import { Projects, projectList } from '../projects';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemLink from './listItemLink';
import Collapse from '@material-ui/core/Collapse';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nestedList: {
    paddingLeft: theme.spacing(6),
  },
}));

function Routes() {
  const classes = useStyles();
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = React.useState(true);
  const [projectsOpen, setProjectsOpen] = React.useState(false);

  const handleProjectsClick = () => {
    setProjectsOpen((prevOpen) => !prevOpen);
  };
  const handleDrawerOpen = () => {
    setMenuOpen(true);
  };
  const handleDrawerClose = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: menuOpen,})}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, menuOpen && classes.hide)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              toppulous
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={menuOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItemLink to="/" primary="Home" icon={<HomeIcon/>} />
            <ListItemLink to="/about" primary="About" icon={<InfoIcon/>} />
            <ListItemLink to="/projects" primary="Projects"
                          icon={<AccountTreeIcon/>}
                          open={projectsOpen}
                          onClick={handleProjectsClick}/>
            <Collapse component="li" in={projectsOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                {projectList.map((project, index) => (
                  <ListItemLink to={`/projects/${project.subPage}`}
                                primary={project.name}
                                className={classes.nestedList} />
                ))}
              </List>
            </Collapse>
          </List>
          <Divider/>
          <ButtonGroup variant="text" fullWidth={true}>
          <Button aria-label="GitHub" href="https://github.com/toppulous">
            <GitHubIcon />
          </Button>
          <Button aria-label="Linkedin" href="https://www.linkedin.com/in/toppulous/">
            <LinkedInIcon />
          </Button>
          <Button aria-label="Instagram" href="https://www.instagram.com/toppulous/">
            <InstagramIcon/>
          </Button>
          <Button aria-label="Twitter" href="https://twitter.com/toppulous">
            <TwitterIcon />
          </Button>
          </ButtonGroup>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: menuOpen,
          })}
        >
          <div className={classes.drawerHeader} />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default Routes;

export { Routes };
