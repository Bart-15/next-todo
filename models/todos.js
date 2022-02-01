const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const TodoSchema = new Schema({
    title:{
        required: true,
        type:String
    },

    isCompleted: {
        required: true,
        type:Boolean,
        default: false
    }
})


const Todo = mongoose.model('todos', TodoSchema);

module.exports = Todo;