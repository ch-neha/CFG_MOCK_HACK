const exp = require("express")

const teacherApp = exp.Router();

const expressAsyncHandler = require("express-async-handler");

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

teacherApp.use(exp.json());

// User Api Routes
teacherApp.post("/create-teacher", expressAsyncHandler( async (req, res) => {
    // get user coln obj
    let teacherclnobj = req.app.get("teacherclnobj");

    // get userobj from client
    let newuserobj=req.body;

    // check user existance
    let userofdb=await teacherclnobj.findOne({username:newuserobj.username})
    
    // if user exists
    if(userofdb!==null){
        res.send({message: "username already taken"});
    }
    else{
        // user exists
        // hashing password using bcryptjs
        let hashedpwd = await bcryptjs.hash(newuserobj.password,10);

        // replace plaintext with hashed pwd
        newuserobj.password = hashedpwd;

        // insert it to database
        await teacherclnobj.insertOne(newuserobj);

        res.send({message:"user created"});
    }
}))

// create route for user login
teacherApp.post("/login", expressAsyncHandler( async (req, res) => {
    // get userclnobj
    let userclnobj = req.app.get("teacherclnobj");
    // get user credentials obj from client
    let userCredobj = req.body;
    // verify if proper credentials, compare username, pwd
    let userofdb = await userclnobj.findOne({username:userCredobj.username});

    if(userofdb==null){
        res.send("no user");
    } 
    else{
        // compare pasword using compare mtd of bcryptjs
        let status = await bcryptjs.compare(userCredobj.password, userofdb.password);

        if(status == false)
            res.send("password not correct");
        else{
            // create json web token  -- abcdef is secret key, validity , just no - seconds
            let token=jwt.sign({username: userofdb.username},'abcdef', {expiresIn:60});
            // encrypted value based on the payload is available in token
            res.send({message:"login success", payload:token, userobj: userofdb});
        }
    }
}))

module.exports = teacherApp;