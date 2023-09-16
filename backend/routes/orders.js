const express = require('express');
const router = express.Router();
const {
    getOrder,
    addOrder,
   

} = require(`../Controller/orderController`);

router.route(`/`).get(getOrder).post(addOrder);


module.exports = router;
