var express = require('express');
var router = express.Router();

/// --- Code CONTROLLERs
router.use(function timeLog (req, res, next) {
    console.log('\n\t Create controller - Time: ', Date().toString());
    next();
})

/// ..................................................
router.get('/', createPage);
function createPage(req, res) {
    res.render('create');
}


/// --- EXports
module.exports = router;
