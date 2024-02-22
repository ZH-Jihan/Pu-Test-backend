module.exports= (...menulist) =>{
    return (req,res,next) =>{
        const userRole = req.user.role;
        if (!menulist.includes(userRole)) {
            return res.status(403).json({
                status:"fail",
                error: "You are not authorized to access this"
            });
        }
        next();
    };
};