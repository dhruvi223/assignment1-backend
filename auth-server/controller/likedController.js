const db = require("../models/model.js");
const LikedProduct = db.likedProducts;

//adds liked product with user id and product id in likedproduct table
const addlProduct = async (req, res) => {
  let info = {
    userEmail: req.body.email,
    pid: parseInt(req.body.pid),
  };

  const lproduct = await LikedProduct.create(info);
  res.status(200).json({ id: LikedProduct.pid });
};

// get product ids of all liked product for any user
const getAllLProduct = async (req, res) => {
  let info = { userEmail: req.body.email };
  const product = await LikedProduct.findAll({
    where: { userEmail: req.query.email },
  });
  res.status(200).send(product);
};

module.exports = { addlProduct, getAllLProduct };
