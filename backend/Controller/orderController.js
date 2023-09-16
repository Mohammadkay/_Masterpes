const OrderItem = require('../models/order-item');
// exports.getAllOrders = async (req, res) => {
//     try {
//         // Retrieve all orders, populate user information, and sort by date
//         const orderList = await Order.find()
//             .populate('user', 'name')
//             .sort({ dateOrdered: -1 });

//         if (!orderList) {
//             return res.status(500).json({ success: false });
//         }

//         res.send(orderList);
//     } catch (error) {
//         return res.status(500).json({ success: false, error: error.message });
//     }
// };

// Add a new order
exports.addOrder = async (req, res) => {
    try {
            const order=await OrderItem.create(req.body)
            res.status(201).json({
                status: "success",
                data :order
            })
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

// Get a specific order
exports.getOrder = async (req, res) => {
    try {
        const allOrder=await OrderItem.find();
        res.status(200).json(allOrder)
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

// Edit an order's status
// exports.editOrder = async (req, res) => {
//     try {
//         // Update the status of a specific order
//         const order = await Order.findByIdAndUpdate(
//             req.params.id,
//             { status: req.body.status },
//             { new: true }
//         );

//         if (!order) {
//             return res.status(400).send('the order cannot be updated!');
//         }

//         res.send(order);
//     } catch (error) {
//         return res.status(500).json({ success: false, error: error.message });
//     }
// };

// // Delete an order
// exports.deleteOrder = async (req, res) => {
//     try {
//         // Find and remove a specific order and its associated order items
//         const order = await Order.findByIdAndRemove(req.params.id);

//         if (order) {
//             await Promise.all(
//                 order.orderItems.map(async (orderItem) => {
//                     await OrderItem.findByIdAndRemove(orderItem);
//                 })
//             );
//             return res
//                 .status(200)
//                 .json({ success: true, message: 'the order is deleted!' });
//         } else {
//             return res
//                 .status(404)
//                 .json({ success: false, message: 'order not found!' });
//         }
//     } catch (error) {
//         return res.status(500).json({ success: false, error: error.message });
//     }
// };

// // Get total sales
// exports.getTotalSales = async (req, res) => {
//     try {
//         // Calculate the total sales amount from all orders
//         const totalSales = await Order.aggregate([
//             { $group: { _id: null, totalsales: { $sum: '$totalPrice' } } },
//         ]);

//         if (!totalSales) {
//             return res.status(400).send('The order sales cannot be generated');
//         }

//         res.send({ totalsales: totalSales.pop().totalsales });
//     } catch (error) {
//         return res.status(500).json({ success: false, error: error.message });
//     }
// };

// // Count the number of orders
// exports.countOrders = async (req, res) => {
//     try {
//         // Count the total number of orders
//         const orderCount = await Order.countDocuments();

//         if (!orderCount) {
//             return res.status(500).json({ success: false });
//         }

//         res.send({ orderCount: orderCount });
//     } catch (error) {
//         return res.status(500).json({ success: false, error: error.message });
//     }
// };

// // Get orders for a specific user
// exports.getUserOrders = async (req, res) => {
//     try {
//         // Retrieve orders for a specific user, populate product information
//         const userOrderList = await Order.find({ user: req.params.userid })
//             .populate({
//                 path: 'orderItems',
//                 populate: {
//                     path: 'product',
//                     populate: 'category',
//                 },
//             })
//             .sort({ dateOrdered: -1 });

//         if (!userOrderList) {
//             return res.status(500).json({ success: false });
//         }

//         res.send(userOrderList);
//     } catch (error) {
//         return res.status(500).json({ success: false, error: error.message });
//     }
// };
