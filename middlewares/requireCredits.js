module.exports = (req,res, next) =>{
    //Check user login or not
    if(req.user.credits < 1){
        //403 forbidden
        return res.status(403).send({error:'Not Enough credits!'});
    }
    next();
}