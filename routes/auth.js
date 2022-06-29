const express = require('express');
const JobGiver = require('../models/JobGiver');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
let nodemailer = require('nodemailer');
const JobSeeker = require('../models/JobSeeker');


const JWT_SECRET = "Yashisagoodboy";
let otp;

//Create a JobGiver using: POST "/api/auth/jobgiver". No login require
router.post('/createjobgiver', [
    body('fname', 'Enter a valid name').isLength({ min: 3 }),
    body('lname', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('phone', 'Enter a valid phone').isLength({ min: 10 }),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    //If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //Check wether the user with this email exist already
    let success = false;
    try {

        let jobgiver = await JobGiver.findOne({ $or: [{ email: req.body.email }, { phone: req.body.phone }] });
        if (jobgiver) {
            success = false;
            return res.status(400).json({ success, error: "Sorry a user with this email or phone already exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await JobGiver.create({
            email: req.body.email,
            fname: req.body.fname,
            lname: req.body.lname,
            phone: req.body.phone,
            password: secPass,
            address: req.body.address
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);

        // res.json(user);
        success = true;
        res.json({ success, authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

})

//Create a JobSeeker using: POST "/api/auth/createjobseeker". No login require
router.post('/createjobseeker', [
    body('fname', 'Enter a valid name').isLength({ min: 3 }),
    body('lname', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('phone', 'Enter a valid phone').isLength({ min: 10 }),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    //If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //Check wether the user with this email exist already
    let success = false;
    try {

        let jobseeker = await JobSeeker.findOne({ $or: [{ email: req.body.email }, { phone: req.body.phone }] });
        if (jobseeker) {
            success = false;
            return res.status(400).json({ success, error: "Sorry a user with this email or phone already exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await JobSeeker.create({
            email: req.body.email,
            fname: req.body.fname,
            lname: req.body.lname,
            phone: req.body.phone,
            password: secPass,
            skills: req.body.skills,
            address: req.body.address
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);

        // res.json(user);
        success = true;
        res.json({ success, authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

})

//Authenticate a user using: POST "/api/auth/login". No login require

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {

    //If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Check wether the user with this email exist already
    try {
        let success = false;
        let user;
        if(req.body.role==="jobgiver"){
            user = await JobGiver.findOne({ email: req.body.email });
        }
        if(req.body.role==="jobseeker")
        {
            user = await JobSeeker.findOne({ email: req.body.email });
        }
        if (!user) {
            success = false;
            return res.status(400).json({ success, error: "Please login with correct credentials" })
        }
        const passwordCompare = await bcrypt.compare(req.body.password, user.password);
        if (!passwordCompare) {
            success = false;
            return res.status(400).json({ success, error: "Please login with correct credentials" })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        // res.json(user);
        res.json({ success, authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

})


//ROUTE 3:Get logged in user details using: POST "/api/auth/getuser". Login required

router.post('/getuser', fetchuser, async (req, res) => {
    let success=false;
    try {
        userID = req.user.id;
        
        if(req.header('role')==="jobgiver")
            user = await JobGiver.findById(userID).select("-password")
        if(req.header('role')==="jobseeker")
            user = await JobSeeker.findById(userID).select("-password")
        if(!user)
            {
                success=false;
                res.send({success});
                return;
            }
        success=true;
        res.send({success,user});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

})

// //Get user

// router.get('/auction/getuser/:id',fetchuser, async (req, res) => {
//     try{
//         let user = await JobGiver.findById(req.params.id);
//         // if (!user) { return res.status(404).send("Not Found") }
//         res.json({user});
//     }catch(e){
//         console.log(e);
//         res.status(500).send("Internal server error");
//     }
    
// })

//ROUTE 4: reset password using POST "/api/auth/resetpass". 


router.post('/sendotp', async (req, res) => {

    let success = false;
    try {
        // let user = await User.findOne({ email: req.body.email });
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            success = false;
            return res.status(400).json({ success, error: "Sorry no account is associated with this email." })
        }

        otp = Math.floor((Math.random() * 199999) + 100001);

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'vorayash0716@gmail.com',
                pass: 'Yash@12345'
            }
        });

        let mailOptions = {
            from: 'vorayash0716@gmail.com',
            to: req.body.email,
            subject: 'iNotes Password Request Otp',
            text: `Your one time password is ${otp}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        success = true;
        res.json({ success, message:`OTP sent to ${req.body.email} successfully.` });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }


})


console.log(otp);
router.post('/resetpass', async (req, res) => {

    let success = false;
    console.log(otp);
    try {
        if (req.body.otp != otp) {
            success = false;
            res.json({ error: "Please Enter Correct Otp.", success });
        }
        // let user = await User.findOne({ email: req.body.email });        
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        password = await User.findOneAndUpdate({ email: req.body.email }, { password: secPass })
        success = true;
        res.json({ message:`Password successfully updated for ${req.body.email}.`, success });

    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error });
    }


})


module.exports = router