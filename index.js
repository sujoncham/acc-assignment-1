
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
    console.log(id);
    let foundUser = users.find(user => user.id === Number(id))
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

app.patch('/user/updateUser/:id', (req, res)=>{
    const {id} = req.params;
    const filter = {_id:id};
    const userUpdate = users.find(user => user.id === Number(id));


    
    userUpdate.id = id,
    userUpdate.name = req.body.name,
    userUpdate.contact = req.body.contact,
    userUpdate.gender = req.body.gender,
    userUpdate.address = req.body.address,
    userUpdate.job = req.body.job,
    userUpdate.photoUrl = req.body.photoUrl,
    
   
    res.send(userUpdate)
});

// app.patch('/user/bulk-update', (req, res)=>{
//     res.send('random number')
// });

app.delete('/user/delete/:id', (req, res)=>{
    const {id} = req.params;
    const filter = {_id:id};
    const userDel = users.filter(user => user.id !== Number(id));
    res.send(userDel);
})

app.listen(port, ()=>{
    console.log("our server is", port);
})


