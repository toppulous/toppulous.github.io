import React from 'react';
import Wildlands from './Wildlands';

import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';

const projectList = [
  {
    subPage: "wildlands",
    name: "Wildlands",
    component: <Wildlands />
  }
]

function Projects() {
  let match = useRouteMatch();

  return (
      <Switch>
        {projectList.map((project, index) => (
          <Route path={`${match.path}/${project.subPage}`}>
            {project.component}
          </Route>
        ))}
        <Route path={match.path}>
          Select a project
        </Route>
      </Switch>
  );
}

export default Projects;

export {Projects, projectList};
