// create express app
const exp = require("express");
//internally contains the http server obj too
const app = exp();

require("dotenv").config();

const mclient=require("mongodb").MongoClient;

app.use(exp.json());

const employeeApp = require("./apis/employee");
const teacherApp = require("./apis/teacher");

// db connection url
const dburl = "mongodb+srv://neha:neha@cluster0.osbgk.mongodb.net/?retryWrites=true&w=majority";

// connect with mongodb server
mclient.connect(dburl)
.then((client) => {
    console.log("db connection success");
    let dbobj=client.db("cfgmockhack");
    let teacherclnobj=dbobj.collection("teacher");
    let employeeclnobj=dbobj.collection("employee");
    // share collectionobj with apis
    app.set("teacherclnobj", teacherclnobj);
    app.set("employeeclnobj",employeeclnobj);
})
.catch(err => console.log('error in db server', err));

app.use('/teachers', teacherApp);
app.use('/employees', employeeApp);

// handling invalid paths
app.use((req, res, next) => {
    res.send({message: "path `${req.url}` is invalid"})
})

// error handling middleware
app.use((err,req,res,next) => {
    res.send({message: "error occured", error:`${err.message}`});
})

app.listen(5000, () => console.log("server listening at port 4000"))
