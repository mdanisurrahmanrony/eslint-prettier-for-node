const Order = require("../models/order");
const Orderitem = require("../models/orderitems");

exports.createOrder = async (req, res) => {  
  const { orderItems, phone} = req.body; 
  
  let newOrder = new Order({     
    phone,    
  })

  for ( var i in orderItems) {    
    var quantity = orderItems[i].quantity;
    var product = orderItems[i].product;    
    var orderitem = new Orderitem({
      quantity,
      product,   
    })
    try {
      await orderitem.save();
      newOrder.orderItems.push(orderitem);
    } catch (error) {
      res.status(500).send(error);
    }    
  }

  try {
    await newOrder.save();
    res.status(201).send("Order Created Successfully");
  } catch (error) {
    res.status(500).send(error);
  };   

};

exports.getOrders = async (req, res) => {

  try {
    let orders = await Order.find()
      .select(["-_id", "-createdAt", "-updatedAt", "-__v"])
      .populate("orderItems","quantity product -_id");   
    
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      error: "Error while getting orders"
    });
  }

};

