const jwt  = require("jsonwebtoken");

exports.generateToken = (userInfo) =>{
    const payload = {
        email: userInfo.email,
        role: userInfo.role,
        permission : userInfo.permission
    };

    const token = jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: "1hr"
    });

    return token;
}