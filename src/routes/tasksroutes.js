const { Router } = require("express");
const {getAllTasks, getTask, createTask, deleteTask, updateTask, 
getAllUser, getUser, createUser, deleteUser, updateUser,
getAllBranch, getBranch, createBranch, deleteBranch, updateBranch 
} = require('../controllers/tasks.controller')

const pool = require('../db');

const router = Router();

/*Vechiculp */

router.get('/vehiculo', getAllTasks)

router.get('/vehiculo/:id', getTask)

router.post('/vehiculo', createTask)

router.delete('/vehiculo/:id',deleteTask)

router.put('/vehiculo/:id',updateTask)

/*Usuario */

router.get('/usuario', getAllUser)

router.get('/usuario/:id', getUser)

router.post('/usuario', createUser)

router.delete('/usuario/:id',deleteUser)

router.put('/usuario/:id',updateUser)

//Sucursal
router.get('/sucursal', getAllBranch)

router.get('/sucursal/:id', getBranch)

router.post('/sucursal', createBranch)

router.delete('/sucursal/:id',deleteBranch)

router.put('/sucursal/:id',updateBranch)

module.exports = router;
