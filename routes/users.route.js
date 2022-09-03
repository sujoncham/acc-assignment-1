const express = require('express');
const router = express.Router();
const users = require('../users.json');

router.get('/random', (req, res)=>{
    const length = users.length;
    const randomData = Math.floor(Math.random()*length)
    res.send(users[randomData]);
});
router.get('/all', (req, res)=>{
    res.send(users);
});
router.get('/all/:id', (req, res)=>{
    const {id} = req.params;
    let foundUser = users.find(user => user.id === Number(id))
    res.send(foundUser);
});
router.get('/someUsers', (req, res)=>{
    let foundUser = users.filter(user => user.job === 'true')
    res.send(foundUser);
});
router.post('/saveUser', (req, res)=>{
    const data = req.body;
    const {id, name, contact, job, address, gender, photoUrl} = data;

    id&&name&& contact&&job&&address&&gender&&photoUrl ? 
    users.push(req.body) && res.send(users)
    :
    res.send('Invalid data');
});
router.patch('/updateUser/:id', (req, res)=>{
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
router.delete('/delete/:id', (req, res)=>{
    const {id} = req.params;
    const filter = {_id:id};
    const userDel = users.filter(user => user.id !== Number(id));
    res.send(userDel);
});

module.exports = router;