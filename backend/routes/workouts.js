const express=require('express')
const router=express.Router()
const {
    createWorkout,
    getworkout,
    getworkouts,
    deleteworkout,
    upddateworkout
}=require("../controllers/workoutsControllers")
const Workout=require('../models/WorkoutModels')

router.get('/',getworkouts)
router.get('/:id',getworkout)
router.post('/',createWorkout)
router.delete('/:id',deleteworkout)
router.patch('/:id',upddateworkout)

module.exports = router