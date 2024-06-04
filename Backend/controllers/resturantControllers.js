const mongoose=require('mongoose');
const Resturant=require('../models/resturantModel.js');

//get all resturant
const getAllResturants=async(req,res)=>{
    try{
        const resturants=await Resturant.find({});
        res.status(200).json(resturants);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

//get one resturant
const getOneResturant=async(req,res)=>{
    try{
        const{id}=req.params;
        const resturants=await Resturant.findById(id);
        res.status(200).json(resturants);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

//create new resturant
const createResturant=async(req,res)=>{
    try{
        const resturant=await Resturant.create(req.body);
        res.status(200).json({message:'Resturant created'});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

//update resturant using id
const updateresturant=async(req,res)=>{
    try{
        const{id}=req.params;
        const resturants=await Resturant.findByIdAndUpdate(id,req.body);
        if(!resturants){
            return res.status(402).json({message:'Resturant not found'})
        }
        res.status(200).json({message:'Resturant Updated Succesfully'});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

//delete resturant using id
const deleteresturant=async(req,res)=>{
    try{
        const{id}=req.params;
        const resturants=await Resturant.findByIdAndDelete(id);
        if(!resturants){
            return res.status(402).json({message:'Resturant not found'})
        }
        res.status(200).json({message:'Resturant deleted Succesfully'});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports={
    getAllResturants,
    createResturant,
    getOneResturant,
    updateresturant,
    deleteresturant,
}