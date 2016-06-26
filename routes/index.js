var express = require('express');
var router = express.Router();

var eventCtrl = require('../controllers/event.controller.js');
var dashboardCtrl = require('../controllers/dashboard.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Feedwall' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Feedwall' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard'});
});

router.post('/dashboard', function(req, res, next) {
  dashboardCtrl.loadDashboard(req, res);  
});

/* GET Event page. */
router.get('/newevent', function(req, res, next) {
    res.render('newevent', { title: 'Create New Event'});
});

/* POST event. */
router.post('/newevent', function(req, res, next) {
    return eventCtrl.createEvent(req, res);
});

/* POST event. */
router.post('/newquestion', function(req, res, next) {
    return dashboardCtrl.createQuestion(req, res);
});

module.exports = router;
