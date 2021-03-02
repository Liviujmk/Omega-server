/*const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const freeRouter = require('./routes/themes/free/r1');
const Article = require('./views/Themes/Free/Blog/models/article')
const BlogRouter = require('./views/Themes/Free/Blog/routes/articles');
const app = express();
const port = 2003;
const methodOverride = require('method-override')
const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");
const router = express.Router();
/*
mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})*/

//passport config
//require('./config/passport')(passport)
//mongoose
/*
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use(expressEjsLayout);

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//express session
app.use(session({
  secret : 'secret',
  resave : true,
  saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req,res,next)=> {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error  = req.flash('error');
  next();
  })
/*
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/Free/index', (req,res) =>{
    res.render('./Themes/Free/index.ejs');
});

app.get('/about', (req,res) =>{
    res.render('./Themes/Free/about.ejs');
});

app.get('/blogs', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('./Themes/Free/Blog/Blogs/blogs', { articles: articles })
  })

app.use('/Themes/Free/Blog/Blogs', BlogRouter)*/

//Routes
/*
app.use('/',require('./routes1/index'));
app.use('/users',require('./routes1/users'));

app.listen(2003);*/
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");
const opn = require('open');
const port = 2003;

//passport config:
require('./config/passport')(passport)
//mongoose
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('MongoDB database connected'))
.catch((err)=> console.log(err));

//EJS
app.use('/static', express.static('static'));
app.set('view engine','ejs');
app.use(expressEjsLayout);
//BodyParser
app.use(express.urlencoded({extended : false}));
//express session
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req,res,next)=> {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error  = req.flash('error');
    next();
    })
    
//Routes
app.use('/',require('./routes1/index'));
app.use('/users',require('./routes1/users'));
//app.use('/dash', require('./routes1/dashboard'));

app.listen(port);
console.log(`Server listens on port ${port}`); 
const url = 'http://localhost:2003';/*
opn(url);*/
