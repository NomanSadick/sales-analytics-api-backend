const productModel = require("../Models/productModel");

// Create Product 
exports.createProduct = async (req, res) => {
    try {
        let reqBody = req.body;
        const data = await productModel.create(reqBody)
        res.status(200).json({ status: 'success', data: data });
    } catch (e) {
        res.status(500).json({ status: 'error', error: e });
    }
};
// }Get All Products 

// exports.getAllProducts = async (req, res) => {
//     try {
//         // Check if the function is being called
//         const data = await productModel.find({}, 'title short_des price discount discount_price image stock star remark createdDate');
//         // console.log("Fetched products:", data); // Check if products are being fetched correctly
//         res.status(200).json({ status: 'success', data: data });
//     } catch (err) {
//         console.error("Error:", err); // Check if any errors are occurring
//         res.status(400).json({ status: 'fail', data: err });
//     }
// };

// }Get All Products 
exports.getAllProducts = async (req, res) => {
    try {
      let data = await productModel.aggregate([
        {
          $project: {
            title: 1,
            short_des: 1,
            price: 1,
            discount: 1,
            discount_price: 1,
            image: 1,
            stock: 1,
            star: 1,
            remark: 1,
            createdDate: {
              $dateToString: { format: "%d-%m-%Y", date: "$createdDate" },
            },
          },
        },
      ]);
      res.status(200).json({ status: "success", data: data });
    } catch (e) {
      res.status(200).json({ status: "error", error: e });
    }
  };
