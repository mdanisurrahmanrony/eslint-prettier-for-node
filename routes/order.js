const express = require("express");

const router = express.Router();

// controllers
const {    
    createOrder,
    getOrders,    
} = require("../controllers/order");

router.post("/createorder", createOrder);
router.get("/getorders", getOrders);

module.exports = router;
