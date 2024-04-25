const complaints = require("../Models/complaintModel");

exports.addComplaintController = async (req, res) => {
  console.log("inside controller");
  const { username, subject, complaint, complaintId ,pendingStatus } = req.body;
  let image = req.file.filename;
  const userId = req.payload;
  console.log(username, subject, complaint, image, userId, complaintId);
  try {
    const existingComplaint = await complaints.findOne({ complaintId });
    if (existingComplaint) {
      res.status(406).json("Complaint already exist");
    } else {
      const newComplaint = new complaints({
        username,
        subject,
        complaint,
        image,
        userId,
        complaintId,
        pendingStatus
      });
      await newComplaint.save();
      res.status(200).json(newComplaint);
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.getUserComplaints = async (req, res) => {
  const userId = req.payload;
  try {
    const allUserComplaints = await complaints.find({ userId });
    console.log(allUserComplaints);
    res.status(200).json(allUserComplaints);
  } catch (error) {
    res.status(401).json(error);
  }
};
exports.removeUserComplaintController = async (req, res) => {
  console.log("inside controller");
  const { id } = req.params;
  console.log(id)
  try {
    const removedUserComplaint = await complaints.findOneAndDelete({complaintId:id});
    res.status(200).json(removedUserComplaint);
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.getAllComplaints = async (req,res)=>{
   try {
    const allComplaints = await complaints.find()
    res.status(200).json(allComplaints)
   } catch (error) {
    res.status(401).json(error)
   }
}
exports.updateStatus = async (req, res) => {
  try {
    const {complaintId} = req.params.id;
    const updatedComplaint = await complaints.findByIdAndUpdate(complaintId);
    updatedComplaint.pendingStatus=!updatedComplaint.pendingStatus
    await updatedComplaint.save()
    res.json(updatedComplaint);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
