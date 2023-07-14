const pool = require("../db");

//Vehiculo

const getAllTasks = async (req,res,next) =>{
    try {
        const AllTasks = await pool.query("SELECT * FROM vehiculo");
        res.json(AllTasks.rows);
    } catch (error) {
        next(error);
    }

};

const getTask = async(req,res,next) =>{
    try {
        const {id} = req.params;

        const result = await pool.query('SELECT * FROM vehiculo WHERE id_veh = $1', [id])

        if(result.rows.length === 0) 
            return res.status(404).json({
                message:'Vehiculo no encontrado'
            })

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const createTask = async(req,res,next) =>{
    const {id_veh, numserie_veh, marca_veh, modelo_veh, aniomodelo_veh, precio_veh, descripcion_veh} = req.body

    try {
        const result = await pool.query("INSERT INTO vehiculo (id_veh, numserie_veh, marca_veh, modelo_veh, aniomodelo_veh, precio_veh, descripcion_veh) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [
            id_veh, 
            numserie_veh, 
            marca_veh, 
            modelo_veh, 
            aniomodelo_veh, 
            precio_veh, 
            descripcion_veh
        ]);
    
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const deleteTask = async(req,res,next) =>{

    try {
        const {id} = req.params;
        const result = await pool.query('DELETE FROM vehiculo WHERE id_veh = $1', [id])
        if(result.rowCount === 0)
            return res.status(404).json({
                message:"Vehiculo no encontrado"
            });

        return res.sendStatus(204); 
    } catch (error) {
        next(error);
    }
};

const updateTask = async(req,res,next) =>{

    try {
        const {id} = req.params;
        const {id_veh, numserie_veh, marca_veh, modelo_veh, aniomodelo_veh, precio_veh, descripcion_veh} = req.body

        const result = await pool.query(
            "UPDATE vehiculo SET id_veh = $1, numserie_veh = $2, marca_veh = $3, modelo_veh = $4, aniomodelo_veh = $5, precio_veh = $6, descripcion_veh = $7 WHERE id_veh = $8 RETURNING *",
            [id_veh, numserie_veh, marca_veh, modelo_veh, aniomodelo_veh, precio_veh, descripcion_veh, id]
        );

        if (result.rows.length === 0)
            return res.status(400).json({
                message:"Vehiculo no encontrado"
            })
        
        return res.json(result.rows[0]);
    } catch (error) {
        
    }
    
};

//Usuario

const getAllUser = async (req,res,next) =>{
    try {
        const AllTasks = await pool.query("SELECT * FROM usuario");
        res.json(AllTasks.rows);
    } catch (error) {
        next(error);
    }

};

const getUser = async(req,res,next) =>{
    try {
        const {id} = req.params;

        const result = await pool.query('SELECT * FROM usuario WHERE cedula_us = $1', [id])

        if(result.rows.length === 0) 
            return res.status(404).json({
                message:'Usuario no encontrado'
            })

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const createUser = async(req,res,next) =>{
    const {cedula_us, nombre_us, apellido_us, edad_us, direccion_us, telefono_us, correo_us} = req.body

    try {
        const result = await pool.query("INSERT INTO usuario (cedula_us, nombre_us, apellido_us, edad_us, direccion_us, telefono_us, correo_us) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [
            cedula_us, 
            nombre_us, 
            apellido_us, 
            edad_us, 
            direccion_us, 
            telefono_us, 
            correo_us
        ]);
    
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const deleteUser = async(req,res,next) =>{

    try {
        const {id} = req.params;
        const result = await pool.query('DELETE FROM usuario WHERE cedula_us = $1', [id])
        if(result.rowCount === 0)
            return res.status(404).json({
                message:"Usuario no encontrado"
            });

        return res.sendStatus(204); 
    } catch (error) {
        next(error);
    }
};

const updateUser = async(req,res,next) =>{

    try {
        const {id} = req.params;
        const {cedula_us, nombre_us, apellido_us, edad_us, direccion_us, telefono_us, correo_us} = req.body

        const result = await pool.query(
            "UPDATE usuario SET cedula_us = $1, nombre_us = $2, apellido_us = $3, edad_us = $4, direccion_us = $5, telefono_us = $6, correo_us = $7 WHERE cedula_us = $8 RETURNING *",
            [cedula_us, nombre_us, apellido_us, edad_us, direccion_us, telefono_us, correo_us, id]
        );

        if (result.rows.length === 0)
            return res.status(400).json({
                message:"Usuario no encontrado"
            })
        
        return res.json(result.rows[0]);
    } catch (error) {
        
    }
    
};

//Sucursal
const getAllBranch = async (req,res,next) =>{
    try {
        const AllTasks = await pool.query("SELECT * FROM sucursal");
        res.json(AllTasks.rows);
    } catch (error) {
        next(error);
    }

};

const getBranch = async(req,res,next) =>{
    try {
        const {id} = req.params;

        const result = await pool.query('SELECT * FROM sucursal WHERE id_suc = $1', [id])

        if(result.rows.length === 0) 
            return res.status(404).json({
                message:'Sucursal no encontrada'
            })

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const createBranch = async(req,res,next) =>{
    const {id_suc, nombre_suc, telefono_suc} = req.body

    try {
        const result = await pool.query("INSERT INTO sucursal (id_suc, nombre_suc, telefono_suc) VALUES ($1, $2, $3) RETURNING *", [
            id_suc, 
            nombre_suc, 
            telefono_suc
        ]);
    
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const deleteBranch = async(req,res,next) =>{

    try {
        const {id} = req.params;
        const result = await pool.query('DELETE FROM sucursal WHERE id_suc = $1', [id])
        if(result.rowCount === 0)
            return res.status(404).json({
                message:"Sucursal no encontrada"
            });

        return res.sendStatus(204); 
    } catch (error) {
        next(error);
    }
};

const updateBranch = async(req,res,next) =>{

    try {
        const {id} = req.params;
        const {id_suc, nombre_suc, telefono_suc} = req.body

        const result = await pool.query(
            "UPDATE sucursal SET id_suc = $1, nombre_suc = $2, telefono_suc = $3 WHERE id_suc = $4 RETURNING *",
            [id_suc, nombre_suc, telefono_suc, id]
        );

        if (result.rows.length === 0)
            return res.status(400).json({
                message:"Sucursal no encontrada"
            })
        
        return res.json(result.rows[0]);
    } catch (error) {
        
    }
    
};

module.exports = {
    getAllTasks, getTask, createTask,deleteTask, updateTask, 
    getAllUser, getUser, createUser, deleteUser, updateUser,
    getAllBranch, getBranch, createBranch, deleteBranch, updateBranch
}