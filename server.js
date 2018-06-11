const express = require('express');
const app = express();

const pgp = require('pg-promise')();

const cn = {
    host: 'localhost',
    port: 1433,
    database: 'VDLCloud',
    user: 'Mark Chen',
    password: ''
};

const db = pgp(cn);

app.get('/', (req, res) =>{
    res.send('<h1> Helloooooo</h1>')
});


app.get('/users', (req, res) =>{
    try {        
        // const users = db.any(
        //     'SELECT * FROM users ');
            console.log(cn);
            res.send(cn);
        // res.send(JSON(users));
        // success
    } 
    catch(e) {
       res.send(e)
    }
})


app.listen(3001);