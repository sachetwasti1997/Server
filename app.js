const exp = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./services/passport');

mongoose.connect(keys.mongoURI, 
    {useNewUrlParser:true})
    .then(() => console.log('Database Connected!'))
    .catch(err => console.log(err));

const app = exp();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey] 
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authroutes')(app);

const PORT = process.env.PORT || 8000
app.listen(PORT);
