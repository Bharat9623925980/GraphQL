var createError = require('http-errors');
var createError = require('http-errors');
const express = require('express'),
    router = express.Router();

const custList = [
    { id : 1, name : 'Cust1' },
    { id: 2, name: 'Cust2' }
];

router.get('/', (req, res, next) => {
    res.json(custList);
});

router.get('/:id', (req, res,next) => {
    const custId = parseInt(req.params.id);
    const resultcust = custList.find(cust => cust.id === custId);
    if (!resultcust){
        next(createError(404))
    } else {
        res.json(resultcust);
    }
});

module.exports = router;