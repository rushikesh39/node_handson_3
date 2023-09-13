const specificmiddleware=(req,res,next)=>{
console.log("specific middleware call")
const age=req.params.age;
console.log("age in specific middle ware",age)

if(!age){
   return res.send("please provide age for accessing this web")
}
else if(age<18){
   return res.send("You can not access this webpage")
}
console.log("specific  middleware")
next()
}
module.exports=specificmiddleware