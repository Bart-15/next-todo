require('../db')
const Todo = require('../models/todos')

const createTodo = async (req, res) => {
    const title = req.body.title;
    try {
        if(!title) {
            return res.status(400).json({
                error: 'Title field is required.'
            })
        }

        const todo = new Todo({title: title});
        await todo.save();
        res.status(200).json({
            message:'Todo created successfully.'
        })
    }catch (e) {
        res.status(500).send("Can't create todo");
    }
}


const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json({
            sucess: true,
            todos
        })
    }catch (e) {
        res.status(500).send("Can't get all todos.")
    }
}


const getSingleTodo = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await Todo.findById(id);
        if(!todo) {
            return res.status(404).json({message:"Todo not found."})
        }


        res.status(200).json({
            success: true,
            todo
        })
    } catch (e) {
        res.status(404).send("Todo not found.")
    }
}


const deleteTodo = async (req, res) => {
    const id = req.params.id;

    try{
        await Todo.findByIdAndDelete(id);
        res.status(200).json({success: true})
    } catch (e) {
        res.status(500).send("Can't delete Todo.")
    }
}


const isCompleted = async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await Todo.findById(id);
        todo.isCompleted = !todo.isCompleted;

        await todo.save();
        res.status(200).json({
            success: true,
        })
    }catch (e) {
        res.status(500).send("Can't find Todo.")
    }
}

const updateTodo = async (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    try {
        if(!title) {
            return res.status(400).json({message:"Title field is required."})
        }
        const todo = await Todo.findByIdAndUpdate(id, {title:title}, {returnOriginal: false});
        res.status(200).json({success: true, todo});
    }catch(e) {
        res.status(500).send("Can't find Todo.")
    }

}

module.exports = {
    createTodo,
    getAllTodos,
    getSingleTodo,
    deleteTodo,
    isCompleted,
    updateTodo
}