const {Router} = require("express");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

require("dotenv").config()

const {NoteModel} = require("../models/Note.model.js")

const notesController = Router();

// notesController.use((req,res,next)=>{
//     console.log("blahdlsjldkjls")
//     next()
// })

// whatever coming from "/notes" in server we are passing here
notesController.get("/", async(req,res)=> {
    /**We need only that particular user's node**/ 
    const notes = await NoteModel.find({userId: req.body.bodyuserId})


    res.send(notes)
    
})


notesController.post("/create", async(req,res)=> {
  
   const { Heading, Note, Tag, userId } = req.body;
  
    const note = new NoteModel({
           Heading,
           Note, 
           Tag,
           userId
    })
    try {
        await note.save()
        res.send("note created")    
      } catch (err) {
         res.send("something went worng") 
      }
//  res.send(note) was giving a huge problem until removed

    // res.send(note)
})


notesController.delete("/delete/:noteId", async(req,res)=>{
    const {noteId} = req.params
    //req.body.userId was added by authentication middleware
    const deletedNote = await NoteModel.findOneAndDelete({_id:noteId,userId:req.body.userId})

    if(deletedNote){
        res.send("deleted")
    }else{
        res.send("Couldn't delete")
    }
})




notesController.patch("/edit/:noteId", async(req,res)=>{
    const {noteId} = req.params
    
    //req.body.userId was added by authentication middleware
    const deletedNote = await NoteModel.findOneAndUpdate({_id: noteId, userId:req.body.userId}, req.body)

    if(deletedNote){
        res.send("Updated")
    }else{
        res.send("Couldn't update")
    }
})

module.exports = {
    notesController
}