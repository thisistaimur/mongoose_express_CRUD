const router = require("express").Router();
const products = require("../controllers/products");
//import check object
const { check } = require('express-validator');

module.exports = () => {
    router.get("/", products.get);
    router.get("/:articleNo", products.getOne);
    router.post("/", [
        check('articleNo').isString(),
        check('name').isString(),
        check('description').isString(),
        check('price').isNumeric()
      ], products.create);
    router.put("/:articleNo", products.update);
    router.delete("/:articleNo", products.remove);

    return router;
};
