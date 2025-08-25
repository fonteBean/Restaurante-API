const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantControllers')


router.get('/pratos/:id', restaurantController.read);
router.get('/pratos/', restaurantController.readAll);
router.post('/pratos/', restaurantController.create);
router.delete('/pratos/:id', restaurantController.del);

module.exports = router;