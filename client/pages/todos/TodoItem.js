import DeleteIcon from '@mui/icons-material/Delete';
import Head from 'next/head'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Link from 'next/link'
import {Button} from '@mui/material'
import styles from '../../styles/TodoItem.module.css'





const TodoItem = ({todo, deleteTodo, toggleCompleted}) => {
    return ( 
        <div className={styles.todoContainer} >
          <Head>
            <title>Bart - Todos</title>
          </Head>
          <div className={!todo.isCompleted ? styles.todoItem : styles.completed}>
              <h4 onClick={() =>  toggleCompleted(todo._id)}>{todo.title}</h4>
          <div className={styles.todoActions}>
            <Link href={`/todos/${todo._id}`}>
              <a>
                <Button className={styles.button} variant="contained" color="warning">
                    <ModeEditIcon />
                </Button>
              </a>
            </Link>
            <Button className={styles.button} onClick={() =>  deleteTodo(todo._id)} variant="contained" color="error">
                <DeleteIcon />
            </Button>
          </div>
          </div>
        </div>
     );
}
 
export default TodoItem;