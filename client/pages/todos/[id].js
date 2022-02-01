import React, {useState} from 'react';
import {useRouter} from 'next/router'
import Link from 'next/link';
import Head from 'next/head';
import { toast } from 'react-toastify';
import {Container, Grid, TextField, Button, Typography} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../../styles/TodoDetails.module.css';
import axios from 'axios';
const BASE_URL = "http://localhost:5000";

const TodoDetails = ({todo}) => {
    const router = useRouter();


    const [data, setData] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            if(!data){
                return setMessage("Todo field is required.")
            }
            const updatedTodo = {
                title:data
            }
            await axios.patch(`${BASE_URL}/api/v1/todo/${todo._id}`, updatedTodo);
            setMessage("");
            setData("");
            toast.success('Updated Successfully!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                });
                
            setTimeout(() => {
                router.push('/todos')
            }, 1800)

        } catch(e) {
            console.log(e)
        }

        
    }

    return ( 
        <Container>
            <Head>
                <title>Bart - TodoItem</title>
            </Head>
           <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={8} alignItems="center">
                <Link href="/todos">
                    <a>
                    <Button variant="contained" color="error">
                        <ArrowBackIcon />
                    </Button>
                    </a>
                </Link>
                <h3 className={styles.headerTitle}>Todo Details</h3>
                <form onSubmit={handleSubmit}>
                        <TextField error={message ? true : false} type="text" name="data" fullWidth label="Update Here" id="fullWidth" value={data} onChange={e => setData(e.target.value)} />
                        <Typography variant="p" color="error">{message ? message : ""}</Typography>
                </form>
                <div className={styles.todoItem}>
                    <p className={styles.title}>Title: {todo.title}</p>
                    <p className={styles.completed}>Completed: {todo.isCompleted ? "True" : "False"}</p>
                </div>
            </Grid>
           </Grid>
        </Container>
     );
}




export const getServerSideProps =  async({query}) =>{
    const {id} = query;
    const BASE_URL = process.env.API;
    const res = await axios.get(`${BASE_URL}/api/v1/todo/${id}`);
    const data = await res.data.todo;

    return {
        props :{
            todo : data
        }
    }
}
export default TodoDetails;