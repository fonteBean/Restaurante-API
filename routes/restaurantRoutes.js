const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantControllers')


router.get('/restaurant/:id', restaurantController.read);
router.get('/restaurant/', restaurantController.readAll);
router.post('/restaurant/', restaurantController.create);
router.delete('/restaurant/:id', restaurantController.del);

module.exports = router;