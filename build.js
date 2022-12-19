const angularConfig = require('./angular.json');
const projects = angularConfig.projects;
const execSync = require('child_process').execSync;
Object.keys(projects).forEach(projectName => {
  const project = projects[projectName];
  if (project.projectType === 'library') {
    const projectToBuild = projectName;
    const command = `ng build ${projectToBuild}`;
    execSync(command);
  }
});
