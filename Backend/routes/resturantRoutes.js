const express = require('express');

const{
    getAllResturants,
    createResturant,
    getOneResturant,
    updateresturant,
    deleteresturant
}=require('../controllers/resturantControllers.js')

const router=express.Router()

//get all resturants 
router.get('/',getAllResturants)

//get one resturant using id
router.get('/:id',getOneResturant)

//create new resturant
router.post('/',createResturant)

//update resturant details using id
router.put('/:id',updateresturant)

//delete resturant using id
router.delete('/:id',deleteresturant)

module.exports=router