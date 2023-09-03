const express = require('express')
const router = express.Router();
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
} = require('../controllers/goalController.js')
// import {getGoals, setGoal} from '../controllers/goalController'

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router