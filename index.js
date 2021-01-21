const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(morgan('dev'))
//joi
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 3001);

// Routes
app.use(require('./routes/routes'));
//https://joi.dev/tester

//app.use('/api/',require('./joi/routes'));

//Iniciamos el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});