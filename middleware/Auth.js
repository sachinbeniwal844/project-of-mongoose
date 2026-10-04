import Jwt from "jsonwebtoken";

const authmiddleware = (req,res,next)=>{
    try{
      const token = req.header("Auth")

      if(!token){
        return res.json({message:"Login first...."})
      }
      const decoded = Jwt.verify(token ,process.env.JWT_SECRET);
      req.user = decoded;

      next();
    }
    catch(err)
    {
        res.json({message :"Invalid token"})
    }
}

export default authmiddleware;