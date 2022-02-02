import React, {useState, useEffect} from 'react';
import {Container, Grid, TextField} from '@mui/material'
import TodoItem from './TodoItem'
import { toast } from 'react-toastify';
import axios from 'axios'


const Todos = ({BASE_URL}) => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState("");
    const [counter, setCounter] = useState(0);
   
    useEffect(() => {
        fetchTodos();
   
    },[])

    const fetchTodos = async() => {
        const res = await axios.get(`${BASE_URL}/api/v1/todos`)
        const data = await res.data.todos;
        setCounter(0)
        setTodos(data);
    }

    const deleteTodo = async(id) => {
        try {
            toast.warn('Todo Deleted Successfully!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                });
          await axios.delete(`${BASE_URL}/api/v1/todo/${id}`)
          fetchTodos();
        }catch(e) {
          console.log(e)
        }
    }

    const toggleCompleted = async(id) => {
       setCounter(counter + 1)
       if(counter === 1) {
        await axios.patch(`${BASE_URL}/api/v1/todo/completed/${id}`)
        fetchTodos();
       }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!todo) {
            return setMessage("Todo field is required.")
        }

        const newTodo = {
            title: todo
        }
        toast.success('Todo Created Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        await axios.post(`${BASE_URL}/api/v1/todos`, newTodo)
        setTodo("")
        fetchTodos();
    }





    return ( 
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={8} alignItems="center">
                    <form onSubmit={handleSubmit}>
                        <TextField 
                        error={message ? true : false}
                        helperText={message ? message : ""}
                        type="text" 
                        name="todo" 
                        fullWidth 
                        label="Enter Todo" 
                        id="fullWidth" 
                        value={todo} 
                        onChange={e => setTodo(e.target.value)} 
                        inputProps={{ style: { color: "#3b3d3c" } }}
                        />
                    </form>
                </Grid>
            </Grid>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem 
                            key={todo._id} 
                            todo={todo}
                            deleteTodo={deleteTodo}
                            toggleCompleted={toggleCompleted}
                        />
                    )
                })
            }
        </Container>
     );
}
 
export const getServerSideProps = async() => {
    const BASE_URL = process.env.API

    return {
        props: {
            BASE_URL
        }
    }
}

export default Todos;