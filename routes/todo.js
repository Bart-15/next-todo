const express = require('express');
const router = express.Router();

const {
    createTodo,
    getAllTodos,
    getSingleTodo,
    deleteTodo,
    isCompleted,
    updateTodo
} =  require('../controllers/todo')



// create todo
router.post('/todos', createTodo);

router.get('/todos', getAllTodos);

router.get('/todo/:id', getSingleTodo);

router.delete('/todo/:id', deleteTodo);

router.patch('/todo/completed/:id', isCompleted);

router.patch('/todo/:id', updateTodo);

module.exports = router;