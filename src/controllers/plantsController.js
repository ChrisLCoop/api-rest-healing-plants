const pool = require('../../database/conection.js')


class PlantsController{
    constructor(){

    }
    consultar(req,res){
        try {
            pool.query(`SELECT * FROM plants`,(error,rows)=>{
                if(error){
                    res.status(400).send(error)
                }else{
                    res.status(200).json(rows)
                }
            })
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
    addPlants(req,res){
        try {
            const {common_name,scientific_name,description_plant,used_parts,use_plant,ways_use_plant} =req.body
            pool.query(`INSERT INTO plants(common_name,scientific_name,description_plant,used_parts,use_plant,ways_use_plant) VALUES(?,?,?,?,?,?)`,[common_name,scientific_name,description_plant,used_parts,use_plant,ways_use_plant],(error,rows)=>{
                if(error){
                    res.status(400).send(error)
                }else{
                    res.status(200).json(rows)
                }
            })
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
    updatePlants(req,res){
        const {id}=req.params
        try {
            const {common_name,scientific_name,description_plant,used_parts,use_plant,ways_use_plant} =req.body
            pool.query(`UPDATE plants SET common_name=IFNULL(?,common_name),scientific_name=IFNULL(?,scientific_name),description_plant=IFNULL(?,description_plant),used_parts=IFNULL(?,used_parts),use_plant=IFNULL(?,use_plant),ways_use_plant=IFNULL(?,ways_use_plant) WHERE id_plant=?`,[common_name,scientific_name,description_plant,used_parts,use_plant,ways_use_plant,id],(error,rows)=>{
                if(error){
                    res.status(400).send(error)
                }else{
                    res.status(200).json(rows)
                }
            })
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
    consultarUno(req,res){
        const {id}=req.params
        try {
            pool.query(`SELECT * FROM plants WHERE id_plant =?`,[id],(error,rows)=>{
                if(error){
                    res.status(400).send(error)
                }else{
                    res.status(200).json(rows)
                }
            })
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
    deletePlant(req,res){
        const {id}=req.params
        try {
            pool.query(`DELETE FROM plants WHERE id_plant=?`,[id],(error,rows)=>{
                if(error){
                    res.status(400).send(error)
                }else{
                    res.status(200).json(rows)
                }
            })
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
   
}

module.exports = new PlantsController();