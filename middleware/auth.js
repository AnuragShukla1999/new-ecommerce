import jwt from 'jsonwebtoken';

export const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split("")[1];
        console.log(token);

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decode);

        req.user = decode;
        next();

    } catch (error) {
        res.status(401).json({
            error : "Invalid input..."
        });
    }
}