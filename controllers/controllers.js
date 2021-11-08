const saySomething = (req,res,next)=>{
    res.status(200).json({
        body:'hello from server!'
    });
};

module.exports.saySomething=saySomething;