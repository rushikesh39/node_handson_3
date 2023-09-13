const appmiddleware=(req,res, next)=>{
    const age=req.query.age
    console.log(age)
    if(!age){
      return  res.send("please provide age for accessing this web")
    }
    else if(age<16){
      return  res.send("You can not access this webpage")
    }
    console.log("appmiddleware")
    next()
}
module.exports=appmiddleware