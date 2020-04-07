const exp = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
const passport = require('passport');
require('./services/passport');

mongoose.connect(keys.mongoURI, 
    {useNewUrlParser:true})
    .then(() => console.log('Database Connected!'))
    .catch(err => console.log(err));

const app = exp();
require('./routes/authroutes')(app);

const PORT = process.env.PORT || 8000
app.listen(PORT);
