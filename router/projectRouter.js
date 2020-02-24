const express = require('express');
const router = express.Router()
const Projects = require('../projectHelper')


router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

  router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });

  router.get('/tasks', (req, res) => {
   
    Projects.getTasks()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
   Projects.findById(id)
    .then(project => {
      if (project) {
        res.json(scheme);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project' });
    });
  });

  router.post('/', (req, res) => {
    const projectData = req.body;
  
    Projects.addProject(projectData)
    .then(newProject => {
      res.status(201).json(newProject);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });

  router.post('/tasks', (req, res) => {
    const taskData = req.body;
  
   Projects.addTask(taskData)
    .then(newTask => {
      res.status(201).json(newTask);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });

  router.post('/resources', (req, res) => {
    const resourceData= req.body;
  
    Projects.addResource(resourceData)
    .then(newResource => {
      res.status(201).json(newResource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });

  module.exports = router