const express = require('express');
const usersControllder = require('../controllers/users.controllers');
const router = express.Router();



router.get('/random', usersControllder.getRandomUsers);

router.get('/all', usersControllder.getAllUsers);

router.get('/all/:id', usersControllder.getUsersId);

router.get('/someUsers', usersControllder.getSomeUsers);

router.post('/saveUser', usersControllder.getSaveUsers);

router.patch('/updateUser/:id', usersControllder.getUpdateUsers);

router.delete('/delete/:id', usersControllder.getDeleteUsers);

module.exports = router;