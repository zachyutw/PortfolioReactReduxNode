module.exports = (req,res, next) =>{
    //Check user login or not
    if(!req.user){
        return res.status(401).send({error:'You must log in'});
    }
    next();
}