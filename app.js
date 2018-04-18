const bodyParser = require('body-parser');
const express = require('express');
const models = require('./models');
const flash = require('connect-flash');
const expressSession = require('express-session');
const viewHelpers = require('./middlewares/viewHelpers');
const passport = require('./middlewares/authentication');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cookieParser());

app.use(expressSession(({ secret: 'keyboard cat', resave: false, saveUninitialized: true })));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('./public'));

// Enable flash in app
app.use(flash());
app.use(viewHelpers.register());

// Load up all of the controllers
const controllers = require('./controllers');
app.use(controllers)


// First, make sure the Database tables and models are in sync
// then, start up the server and start listening.
models.sequelize.sync({force: false})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`)
    });
  });
