import user from '../models/users.js';


export const newUserRegistration = async(req, res , next)=>{
    try {
        const formData = req.body;

    const userinfo = await user.findOne({email:email})

    if(!userinfo){
        await data.save()
        res.send({message : "user Created Successfully"})
    }else{
        res.send({message:"user already exists", userinfo})
    }
    } catch (error) {
        res.send({message : "Some error Occurred", error})
    }
}

export const addBookmarks = async(req,res,next)=>{
        
    const id = req.body;
    {  
        try {
            const user = await user.findById(req.user._id)
            if (user) {
                const existingBookmark = user.bookmarksId.includes(id);
               if(!existingBookmark){
                user.bookmarksId.push(id); 
                await user.save();
                res.json({ message: 'internship Applied successfully', bookmarks: user.bookmarksId });
               }else{
                return res.status(400).json({ error: ' already Applied' });
               }
              }else{
                return res.status(404).json({ error: 'User not found' });
              }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
export const otpsend = async(req,res,next)=>{
    
}
