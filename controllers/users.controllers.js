const users = require('../users.json');
const fs = require('fs');


module.exports.getRandomUsers = (req, res, next)=>{
    const length = users.length;
    const randomData = Math.floor(Math.random()*length);
    res.send(users[randomData]);
}

module.exports.getAllUsers = (req, res, next)=>{
    res.send(users);
}

module.exports.getUsersId = (req, res, next)=>{
    const {id} = req.params;
    let foundUser = users.find(user => user.id === Number(id))
    res.send(foundUser);
}

module.exports.getSomeUsers = (req, res, next)=>{
    let foundUser = users.filter(user => user.job === 'true')
    res.send(foundUser);
}

module.exports.getSaveUsers = (req, res, next)=>{
    const data = req.body;

    fs.appendFile('../users.json', JSON.stringify(data), (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
            users.push(data) && res.send(users);
        }
    });
    // const {id, name, contact, job, address, gender, photoUrl} = data;

    // id&&name&& contact&&job&&address&&gender&&photoUrl ? 
    // users.push(data) && res.send(users)
    // :
    // res.send('Invalid data');

}

module.exports.getUpdateUsers = (req, res, next)=>{
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
}

module.exports.getDeleteUsers = (req, res, next)=>{
    const {id} = req.params;
    const filter = {_id:id};
    const userDel = users.filter(user => user.id !== Number(id));
    res.send(userDel);
};