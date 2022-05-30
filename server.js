// create express app
const exp = require("express");
//internally contains the http server obj too
const app = exp();

require("dotenv").config();

const mclient=require("mongodb").MongoClient;

app.use(exp.json());

// const prodApp = require("./apis/productApi");
// const userApp = require("./apis/userApi");

// db connection url
const dburl = process.env.DBURL;

// connect with mongodb server
mclient.connect(dburl)
.then((client) => {
    console.log("db connection success");
    // let dbobj=client.db("testdb");
    // let userclnobj=dbobj.collection("users");
    // let prodclnobj=dbobj.collection("products");
    // // share collectionobj with apis
    // app.set("userclnobj", userclnobj);
    // app.set("prodclnobj",prodclnobj);
})
.catch(err => console.log('error in db server', err));

// app.use('/prod-api', prodApp);
// app.use('/user-api', userApp);

// handling invalid paths
app.use((req, res, next) => {
    res.send({message: "path `${req.url}` is invalid"})
})

// error handling middleware
app.use((err,req,res,next) => {
    res.send({message: "error occured", error:`${err.message}`});
})

app.listen(5000, () => console.log("server listening at port 4000"))
