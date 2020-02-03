let express = require('express');
let router = express.Router();


// QueryString => query property on the request object
// localhost:5000/person?name=thomas&age=28
router.get('/person', (req, res) => {
    if (req.query.name){
        res.send(`You have requested a personnnn ${req.query.name}`)
    } else {
    res.send('You have requested a person')
    }
})

// Params property on the request object
// localhost:5000/person/thomas
router.get('/person/:name', (req, res) => {
    res.send(`You have requested a person ${req.params.name}`)
})


router.get('/error', (req, res) => {
    throw new Error('This is a forced error')
})



module.exports = router;