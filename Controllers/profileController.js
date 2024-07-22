const profiles = require('../Models/profileSchema')

// //add the user details
exports.addUserProfile = async(req,res)=>{
    console.log("Inside addUserProfile ");

    //get userId
   const userId = req.payload

     //get profileImage
      const profileImage = req.file.filename
     //get profile details
      const {username,age,dob,contact} =req.body

       console.log(userId,username,age,dob,contact,profileImage);

//logic for adding profile details

     try{
       // if contact is present in mongodb
       const existingProfile = await profiles.findOne({contact})
       if(existingProfile){
       return res.status(402).json("Profile already exists")
       }
       else{
        //if contact is not present in mongodb then create new profile details and save them in mongodb
        const newProfile = new profiles({
            username,age,dob,contact,profileImage,userId
        });
        await newProfile.save()//save new profile to mongodb
       return res.status(200).json(newProfile)//response send to client
       }

     }
     catch(err){
       return res.status(404).json({message:err.message})
     }

 }

//get profile details
exports.getProfile = async (req, res) => {
  try {
    const profile = await profiles.findOne().sort({ _id: -1 });
    res.status(200).json(profile); // Send profile to frontend
  } catch (err) {
    res.status(500).json("Internal server error: " + err.message);
  }
};

//update profile details
exports.updateProfile=async (req,res)=>{
  const {username,age,dob,contact,profileImage} = req.body
  const uploadImage = req.file?req.file.filename:profileImage
  userId = req.payload
     const {pid} = req.params
     try{
      //find the particular  profile and update the profile details then save to mongodb
        const updateProfile = await profiles.findByIdAndUpdate({_id:pid},{username,age,dob,contact,profileImage:uploadImage,userId})
      //to save the profile details to mongodb
        await updateProfile.save()
        //response send back to client
        res.status(200).json(updateProfile)
     }
     catch(err){
      res.status(401).json("Internal server error" +err.message);
     }
}





