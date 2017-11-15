const bodyParser = require('body-parser');
const express = require('express');
const models = require('./models/');
const passport = require('./middlewares/authentication');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
//init app
const app = express();
//const PORT = process.env.PORT || 8000;
//body parser middleware 
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('./public'));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
//app.use(expressSession(({ secret: 'keyboard cat', resave: false, saveUninitialized: true })));
// Uncomment the following if you want to serve up static assets.
// (You must create the public folder)
/*
app.use(express.static('./public'));
*/

// Uncomment the following if you want to use handlebars
// on the backend. (You must create the views folder)
/*
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);
*/

// Load up all of the controllers
const controllers = require('./controllers/');
app.use(controllers)

//app.use(viewHelpers.register());
// First, make sure the Database tables and models are in sync
// then, start up the server and start listening.

const PORT = process.env.PORT || 3000;

models.sequelize.sync({force: false})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`)
    });
  });

