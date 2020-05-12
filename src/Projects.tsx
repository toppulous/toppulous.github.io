import React from 'react';
import { Link as RouterLink , Route, Switch, useRouteMatch } from 'react-router-dom';
import { Typography, List, Paper, ListItem, ListItemText } from '@material-ui/core';


function Projects() {
  const match = useRouteMatch();
  return (
    <Paper>
      <Typography variant="h1">
        Projects
      </Typography>
      <List>
        <ListItem component={({innerRef, ...props}) => <RouterLink {...props} to={`${match.url}/project-1`} />}>
          <ListItemText> Project 1 </ListItemText>
        </ListItem>
      </List>
      <Switch>
        <Route path={`${match.path}/project-1`}>
          <ProjectOne />
        </Route>
      </Switch>
      <Route path={match.path}>
        <Typography variant="h1">
          Select a project
        </Typography>
      </Route>
    </Paper>
  );
}

function ProjectOne() {
  return <Typography variant="h1"> This is project one </Typography>;
}

export default Projects;
