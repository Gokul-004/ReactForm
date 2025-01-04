import user from '../model/userModel.js';

export const create = async(req,res)=>{
    try
    {
        let userData = new user(req.body);
        let {email}=userData;
        const userExist=await user.findOne({email})
        if(userExist){
            return res.status(400).json({message:"User Already exist"});
         }
         const savedUser = await userData.save();
         res.status(200).json({savedUser});
    }
    catch{
        res.status(500).json({error:"Internal error"});
    }
}
export const fetch = async(req,res)=>{
    try{
        const users=await user.find();
        if(user.length==0)
        {
            return res.status(404).json({message:"No User"});
        }
      res.status(200).json({users});
    }
    catch(err){
        res.status(500).json({error:"internal error"});
    }
}

export const update=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist1=await user.findOne({_id:id});
        if(!userExist1)
        {
            return res.status(200).json({message:"User Not Found"});
        }
        const updateduser=await user.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({updateduser});
    }
    catch(err){
           res.status(500).json({error:"Internal Error"})
    }

}

export const del=async(req,res)=>{
    try{
        const id=req.params.id;
        let userExist=await user.findOne({_id:id});
        if(!userExist)
        {
            return res.status(200).json({message:"User not found"});
        }
        const deluser=await user.deleteOne({_id:id})
       
        
        res.status(200).json({deluser});
    }
    catch(err){
        res.status(500).json({error:"internal error"});
    }
}

export const fetchID=async(req,res)=>{
    try{
        const id=req.params.id;
        let userExist=await user.findOne({_id:id});
        if(!userExist || userExist.length == 0)
        {
            return res.status(200).json({message:"User not found"});
        }
        const fuser=await user.findById({_id:id});
       
        
        res.status(200).json({fuser});
    }
    catch(err){
        res.status(500).json({error:"internal error"});
    }
}