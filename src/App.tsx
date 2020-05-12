import React from 'react';
import About from './About';
import Projects from './Projects';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link as RouterLink} from 'react-router-dom';
import { Paper, List, ListItemText, ListItem } from '@material-ui/core';

// https://github.com/mui-org/material-ui/issues/9106
function App() {
  return (
    <Router>
      <Paper elevation={0}>
        <List>
          <ListItem component={({innerRef, ...props}) => <RouterLink {...props} to="/"/>}>
            <ListItemText> Home </ListItemText>
          </ListItem>
          <ListItem component={({innerRef, ...props}) => <RouterLink {...props} to="/about"/>}>
            <ListItemText> About </ListItemText>
          </ListItem>
          <ListItem component={({innerRef, ...props}) => <RouterLink {...props} to="/projects"/>}>
            <ListItemText> Proects </ListItemText>
          </ListItem>
        </List>
      </Paper>
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
    </Router>
  );
}

export default App;
