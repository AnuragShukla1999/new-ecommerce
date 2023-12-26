import User from "../../models/userModel.js"


// export const userDetails = async (req, res) => {
//     try {
//         User.findOne({ email: req.user.eamil }, async (err, result) => {
//             res.send({ alert: 'success', message: 'Successfully Login', data: {
//                 firstName: result.firstName,
//                 lastName: result.email,
//                 email: result.email,
//                 image: result.image,
//                 cartItem: result.cartItem,
//                 _id: result._id,
//             } });
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: "Internal Server error...!"
//         })
//     }
// };











export const userDetails = async (req, res) => {
    try {
        // Check if req.user exists and has the email property
        console.log('req.user:', req.user)
        if (!req.user || !req.user.email) {
            return res.status(400).json({ message: 'User not authenticated' });
        }

        User.findOne({ email: req.user.email }, async (err, result) => {
            if (err || !result) {
                return res.status(404).json({ alert: 'error', message: 'User not found' });
            }

            res.json({
                alert: 'success',
                message: 'Successfully logged in',
                data: {
                    firstName: result.firstName,
                    lastName: result.email,
                    email: result.email,
                    image: result.image,
                    cartItem: result.cartItem,
                    _id: result._id,
                }
            });
        });
    } catch (error) {
        console.error('Internal Server Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};