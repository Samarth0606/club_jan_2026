const RestaurantModel = require("../model/Restaurant.model")

async function createRestaurant(req,res){
    try{
        let {name,imgUrl,rating,cuisines,deliveryTime} = req.body; //by default = undefined
        let newRestaurant = await RestaurantModel.create({name,imgUrl,rating,cuisines,deliveryTime});
        return res.status(201).json(newRestaurant)
    }
    catch(err){
        return res.status(500).json({"error while creating restaurant":err.message})
    }
}
async function fetchRestaurant(req,res){
    try{
        let data = await RestaurantModel.find({});
        if(!data){
            return res.status(404).json({msg: "Restaurnts are not found"})
        }
        return res.status(200).json(data)
    }
    catch(err){
        return res.status(500).json({"error while fetching restaurant":err.message})
    }
}

async function updateRestaurant(req,res){
    try{
        let {id} = req.params;
        const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(id, req.body , {new:true})
        if(!updatedRestaurant){
            return res.status(404).json({msg: "Restaurant not found"})
        }
        return res.status(200).json(updatedRestaurant)
    }
    catch(err){
        return res.status(500).json({msg:err.message})
    }
}

async function deleteRestaurant(req,res){
    try{
        let {id} = req.params;
        const deletedRestaurant = await RestaurantModel.findByIdAndDelete(id)
        if(!deletedRestaurant){
            return res.status(404).json({msg: "Restaurant not found"})
        }
        return res.status(200).json(deletedRestaurant)
    }
    catch(err){
        return res.status(500).json({msg:err.message})
    }
}

module.exports = {createRestaurant,fetchRestaurant,updateRestaurant,deleteRestaurant}