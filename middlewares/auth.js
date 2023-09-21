const auth=(req,res,next)=>{
    if(req.query.age && req.query.age<18){
        res.send("<h1>you can't access this page</h1>");
    }
    else if(!req.query.age){
        res.send("error");
    }
    else {
        next();
    }
}
module.exports={
    auth
}