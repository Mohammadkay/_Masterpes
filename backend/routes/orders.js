const express = require('express');
const router = express.Router();
const {
    getAllOrders,
    addOrder,
    getOrder,
    editOrder,
    deleteOrder,
    getTotalSales,
    countOrders,
    getUserOrders,
} = require(`../Controller/orderController`);

router.route(`/`).get(getAllOrders).post(addOrder);
router.route(`/:id`).get(getOrder).put(editOrder).delete(deleteOrder);

router.get('/get/totalsales', getTotalSales);

router.get(`/get/count`, countOrders);

router.get(`/get/userorders/:userid`, getUserOrders);

module.exports = router;
