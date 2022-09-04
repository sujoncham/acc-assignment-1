
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require('./routes/users.route.js')

app.use(express.json());

app.use('/users/', userRouter);

app.all('/', (req, res)=>{
    res.send(__dirname + './index.html');
})


app.listen(port, ()=>{
    console.log("our server is", port);
})







