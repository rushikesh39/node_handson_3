const express=require('express')
const app=express()
const appmiddleware=require("./middleware/appmiddleware")
const specificmiddleware=require("./middleware/specificmiddleware")

const route=express.Router()
route.use(specificmiddleware)

app.use(appmiddleware)

app.get('/',(req,res)=>{
    res.send("home")
})
app.get('/about',(req,res)=>{
    res.send("about")
})
app.get('/product/:age',specificmiddleware,(req,res)=>{
    res.send("product")
})
route.get('/contact/:age',(req,res)=>{
    res.send("contact")
})

app.use("/",route)

app.listen(5000,()=>{
    console.log("server is running port 5000")
})