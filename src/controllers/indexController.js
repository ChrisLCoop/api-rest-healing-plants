const pool = require('../../database/conection.js')

class IndexController{
    constructor(){

    }

    inicio(req,res){
        res.render('index')
    }

    pageAddItem(req,res){
        try {
            pool.query(`SELECT * FROM plants`,(error,rows)=>{
                if(error){
                    console.log(error)
                }else if(rows.length <=0){
                    res.render('add-plants',{data:[]})
                }else{
                    res.render('add-plants',{data:rows})
                }
            })
        } catch (error) {
            res.send('Ocurrio algo'+ error)
        }
        
    }

    addItem(req,res){
        console.log('en uso')
        try {
            const {nombreCom,nombreCie,description,partUsada,usoApli,formUso}=req.body
            pool.query(`INSERT INTO plants(common_name,scientific_name,description_plant,used_parts,use_plant,ways_use_plant) VALUES(?,?,?,?,?,?)`,[nombreCom,nombreCie,description,partUsada,usoApli,formUso],(error,rows)=>{
                if(error){
                    res.send(error)
                }else{
                    res.redirect('/add-plants')
                }
            })
        } catch (error) {
            res.send('Ocurrio algo'+ error)
        }
    }

    uploadAvatarPlants(req,res){
        try {
            const {filename} = req.file;
            const filepath = `/uploads/${filename}`;
            const {id_item} = req.body
            pool.query(`UPDATE plants SET url_image=? WHERE id_plant=?`,[filepath,id_item],(error,rows)=>{
                if(error){
                    res.send('Ocurrio Algo'+ error)
                }else{
                    res.redirect('/add-plants')
                }
            })
        } catch (error) {
            res.send('Ocurrio algo'+ error)
        }
    }

    imgItem(req,res){
        try {
            pool.query(`SELECT common_name,url_image FROM plants`,(error,rows)=>{
                if(error){
                    res.send('Ups, algo paso'+ error)
                }else if(rows.length <=0) {
                    res.render('image-plants',{data:[]})
                }else{
                    res.render('image-plants',{data:rows})
                }
            })
        } catch (error) {
            res.send('Ocurrio algo'+ error)
        }
    }

}

module.exports = new IndexController();