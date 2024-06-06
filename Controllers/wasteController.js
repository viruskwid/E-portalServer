const wastes = require('../Models/wasteModel')


exports.addWasteController = async (req,res)=>{
const {username,location,type,wasteId,date}=req.body
let image = req.file.filename
const userId = req.payload
try {
    const existingWaste = await wastes.findOne({wasteId})
    if (existingWaste) {
        res.status(406).json("Waste report already exist");
   
    } else {
        const newaste = new wastes({
            username,
            location,
            type,
            userId,
            wasteId,
            date,
            image
        })
        await newaste.save()
        res.status(200).json(newaste);
    }
} catch (error) {
    res.status(401).json(error);  
}
}

exports.allWasteController = async (req,res)=>{
    try {
        const allWasteReport= await wastes.find()
        res.status(200).json(allWasteReport)
    } catch (error) {
        res.status(401).json(error)
    }
}
exports.userWasteController = async (req,res)=>{
    try {
        const userId=req.payload
        const userWaste = await wastes.find({userId})
        res.status(200).json(userWaste)
    } catch (error) {
        res.status(401).json(error) 
    }
}
exports.removeWasteController = async (req,res)=>{
    const {id}=req.params
    try {
        const deletedWaste = await wastes.findOneAndDelete({wasteId:id})
        res.status(200).json(deletedWaste)
    } catch (error) {
        res.status(401).json(error) 
    }
}