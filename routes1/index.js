const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require('../config/auth'); 
const User = require('../models/user');
const App = require('../models/app');
//login page
router.get('/', (req,res)=>{
    res.render('welcome');
})
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})

/////  dashboard routes  /////
router.get('/dashboard',ensureAuthenticated,(req,res)=>{
    res.render('dashboard',{
        user: req.user
    });
})

router.get('/dashboard/apps', (req,res)=>{
    res.render('./dash/apps',{
        user: req.user
    });
})

router.get('/dashboard/settings', (req,res)=>{
    res.render('./dash/settings',{
        user: req.user
    });
})

router.get('/dashboard/apps/new', (req,res)=>{
    res.render('./dash/new-app',{
        app: new App()
    });
})

router.post('/dashboard/apps', async (req, res, next) => {
    req.app = new App()
    next()
}, saveAppAndRedirect('new'))

function saveAppAndRedirect(path) {
    return async (req, res) => {
        let app = req.app
        app.title = req.body.title
        try {
          app = await app.save()
          res.redirect(`/dashboard/apps/${app.title}`)
        } catch (e) {
          res.render(`/dashboard/apps/${path}`, { app: app })
        }
      }
}

module.exports = router;