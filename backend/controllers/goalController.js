const asyncHandler = require('express-async-handler')

//@desc   Get goals
//@route  Get  /api//goals
//@access Private
const getGoals = asyncHandler (async (req,res) =>{
    res.status(200).json({ message:'Get goals' })
})

//@desc   Set goal
//@route  Post  /api//goals
//@access Private
const setGoal = asyncHandler (async (req,res) =>{
    if (!req.body.text){
       res.status(400)
       throw new Error('Please add textfield')
    }
    res.status(200).json({ message:'Set goal' })
})

//@desc   Updates goal
//@route  PUT /api//goals/:id
//@access Private
const updateGoal = asyncHandler (async (req,res) =>{
    res.status(200).json({ message:`Update goal ${req.params.id}` })
})

//@desc   Delete goal
//@route  DELETE  /api//goals/:id
//@access Private
const deleteGoal = asyncHandler (async (req,res) =>{
    res.status(200).json({ message:`Delete goal ${req.params.id}` })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}