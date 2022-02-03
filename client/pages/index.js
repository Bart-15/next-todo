import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Todos from '../pages/todos'
import 'animate.css';


export default function Home() {
  return (
   <div>
     <Head>
       <title>Todos - Home</title>
     </Head>
    <div>
      <h3>Todo List (Next.js)</h3>
      <h4>Features</h4>
      <ul>
        <li>CREATE, READ, UPDATE and DELETE (CRUD)</li>
        <li>Toggle todo to mark as completed.</li>
        <li>Simple form validation.</li>
      </ul>
    </div>
   </div>
  )
}
