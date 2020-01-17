var createError = require('http-errors');
var createError = require('http-errors');
const express = require('express'),
    router = express.Router();

const projectList = [
    { id : 1, name : 'Proj1' },
    { id: 2, name: 'Proj2' }
];

router.get('/', (req, res, next) => {
    res.json(projectList);
});

router.get('/:id', (req, res,next) => {
    const projectId = parseInt(req.params.id);
    const resultProject = projectList.find(project => project.id === projectId);
    if (!resultProject){
        next(createError(404))
    } else {
        res.json(resultProject);
    }
});

module.exports = router;