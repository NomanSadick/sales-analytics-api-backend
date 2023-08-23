const userModel = require("../Models/userModel");
const JWT = require("jsonwebtoken")


exports.register = async function (req, res) {
    try {
        let reqBody = req.body;
        let data = await userModel.create(reqBody);
        res.status(200).json({ status: "success", data: data });

    } catch (e) {
        res.status(500).json({ status: "error", error: e });
    }
}

//! User Login
// exports.login = async (req, res) => {
//     try {
//         const reqBody = req.body;

//         const user = await userModel.findOne(reqBody, { _id: 1, email: 1});

//         if (user) {
//             const tokenPayload = {
//                 exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
//                 data: user.email,
//             };
//             const token = JWT.sign(tokenPayload, JWT_AUTH_SECRET_KEY);

//             res.status(200).json({ status: "success", token, data: user });
//         } else {
//             res.status(401).json({ status: "unauthorized" });
//         }
//     } catch (error) {
//         res.status(500).json({ status: "error", error: error.message });
//     }
// };

//! User Login
exports.login = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await userModel.findOne(reqBody, { _id: 1, email: 1 });

        if (user) {
            const tokenPayload = {
                exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
                data: user.email,
            };
            const token = JWT.sign(tokenPayload, process.env.JWT_AUTH_SECRET_KEY);

            res.status(200).json({ status: "success", token, data: user });
        } else {
            res.status(401).json({ status: "unauthorized" });
        }
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
};








