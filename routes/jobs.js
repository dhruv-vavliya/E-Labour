const express = require('express');
const router = express.Router();
const Jobs = require('../models/Jobs');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const JobSeeker = require('../models/JobSeeker');
const JobGiver = require('../models/JobGiver');


//ROUTE 1:Get all the Jobs using: GET "api/jobs/fetchalljobs". Login required
router.get('/fetchalljobs', fetchuser, async (req, res) => {
    try {
        const jobs = await Jobs.find({ user: req.user.id });
        res.json(jobs)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

//ROUTE 1:Get all the Jobs for auction using: GET "api/jobs/fetchalljobsauction". Login required
router.get('/fetchalljobsauction', fetchuser, async (req, res) => {
    try {
        const jobs = await Jobs.find();
        const allResults = jobs.map(async(item)=>{
            const jobGiver = await JobGiver.findById(item.user);
            console.log(jobGiver); 
            return {"job": item, "jobGiver": jobGiver};
        })
        const newObj = await Promise.all(allResults);
        res.json(newObj);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

// Get all Fav Jobs of Job seeker
router.get('/fetchfavjob/:id', fetchuser, async (req, res) => {
    try {
        const jobseeker = await JobSeeker.findById(req.params.id);

        const info = jobseeker.favourites.map(async (item) => {
            const job = await Jobs.findById(item.id);
            const user = await JobGiver.findById(job.user);
            const newObj = { "jobgiver": user, "job": job, "bidValue":item.bidValue };
            return newObj;
        })
        const allResults = await Promise.all(info);
        jobseeker.favourites = allResults;
        res.json(jobseeker);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

// Delete fav job
router.delete('/deletefavjob/:id', fetchuser, async (req, res) => {
    try {
        const deletefav = await JobSeeker.updateOne({_id:req.params.id},{$pull:{favourites:{id:req.body.id}}});

        res.json(deletefav);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

//ROUTE 2:Add a new Note using : POST "api/jobs/addjob". Login required
router.post('/addjob', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {

            //If there are errors , return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const job = new Jobs({
                title: req.body.title,
                description: req.body.description,
                user: req.user.id
            })

            const saveJob = await job.save()
            res.json(saveJob)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    })

//Add job to favourites by job seeker OnBid
router.put('/addfav/:id', fetchuser, async (req, res) => {
    try {

        // addfav = await JobSeeker.findOneAndUpdate({ _id: req.params.id }, { $push: { favourites: {id: req.body.id, bidValue : req.body.bidValue }} });
        let addfav = await JobSeeker.findOne({ $and:[{ _id: req.params.id }, { favourites: { $elemMatch: { id: req.body.id } } }] });
        if(!addfav)
        {
        addfav = await JobSeeker.findOneAndUpdate({ _id: req.params.id }, { $push: { favourites: {id: req.body.id, bidValue : req.body.bidValue }} });
        }
        console.log(addfav);
        res.json(addfav);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

//ROUTE 3:Update an existing Note using: POST "api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    //Create a newNote object 
    const newNote = {};
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
    if (tag) { newNote.tag = tag };

    //Find the note to be updated and update it 
    let note = await Note.findById(req.params.id);
    if (!note) { return res.status(404).send("Not Found") }

    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.json({ note });
})



//ROUTE 3:Update an existing Note using: POST "api/notes/updatenote". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    //Create a newNote object 

    //Find the note to be updated and update it 
    let note = await Note.findById(req.params.id);
    if (!note) { return res.status(404).send("Not Found") }

    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id)
    res.send(note);
})
module.exports = router