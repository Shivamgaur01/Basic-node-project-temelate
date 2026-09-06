const express = require('express');
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddleware } = require('../../middlewares');

const router = express.Router();

// /api/v1/airplanes/  post
router.post('/', AirplaneMiddleware.validateCreateRequest , AirplaneController.createAirplane)

// /api/v1/airplanes/  get
router.get('/', AirplaneController.getAirplanes)

// /api/v1/airplanes/:id  get
router.get('/:id', AirplaneController.getAirplane)


module.exports = router 