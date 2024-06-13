const express = require('express');
const router = express.Router();
const plantsController = require('../controllers/plantsController.js')

router.get('/',plantsController.consultar);

router.post('/',plantsController.addPlants);

router.route('/:id')
    .get(plantsController.consultarUno)
    .patch(plantsController.updatePlants)
    .delete(plantsController.deletePlant)

module.exports = router;