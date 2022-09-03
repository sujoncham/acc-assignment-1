
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require('./routes/users.route.js')

app.use(express.json());

app.use('/users/', userRouter);

// app.patch("/user/bulk-update", (req, res) => {
//     const users = fs.readFileSync("./users.json", "utf-8");
//     const user = JSON.parse(users);
//     const ids = req.body.ids;
//     const updatedData = req.body.data;
//    if(ids && updatedData){
//     const updatedUser = user.map(user => {
//       if (ids.includes(user.id)) {
//         return { ...user, ...updatedData };
//       } else {
//         return user;
//       }
//     })
//     fs.writeFileSync("./users.json", JSON.stringify(updatedUser));
//     res.status(200).send(updatedUser);
// }

// });



app.listen(port, ()=>{
    console.log("our server is", port);
})







