const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    console.log("inside jwt middleware");
    console.log("VERIFY SECRET:", process.env.JWT_SECRET);
    
    try {
        const authHeader = req.headers['authorization'];

        if (!authHeader) {
            return res.status(401).json("Token missing");
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json("Token malformed");
        }

        const jwtResponse = jwt.verify(token, process.env.JWT_SECRET);

        console.log("DECODED:", jwtResponse); // 🔍 debug

        req.payload = jwtResponse.userId;

        next();

    } catch (err) {
        console.log("JWT ERROR:", err.message); // 🔥 VERY IMPORTANT
        return res.status(401).json("Invalid or expired token");
    }
}

module.exports = jwtMiddleware;