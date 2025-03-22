const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const {body} = require("express-validator");


router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name should be atleast 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password should be atleast 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color should be atleast 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate should be atleast 3 characters long'),
    body('vehicle.capacity').isLength({min: 1}).withMessage('Capacity should be atleast 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
], 
    captainController.registerCaptain
)



module.exports = router;