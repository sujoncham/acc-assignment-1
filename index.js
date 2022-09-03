
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const users = require('./users.json');

app.use(express.json());


app.get('/user/random', (req, res)=>{
    const length = users.length;
    const randomData = Math.floor(Math.random()*length)
    res.send(users[randomData]);
});

app.get('/user/all', (req, res)=>{
    res.send(users);
});

app.get('/user/all/:id', (req, res)=>{
    const {id} = req.params;
    let foundUser = users.find(user => user.id === id)
    res.send(foundUser);
});

app.get('/user/someUsers', (req, res)=>{
    let foundUser = users.filter(user => user.job === 'true')
       res.send(foundUser);
})


app.post('/user/saveUser', (req, res)=>{
    const data = req.body;
    const {id, name, contact, job, address, gender, photoUrl} = data;

    id&&name&& contact&&job&&address&&gender&&photoUrl ? 
    (users.push(req.body), res.send(users))
    :
    res.send('Invalid data');
});



app.listen(port, ()=>{
    console.log("our server is", port);
})


