import Head from 'next/head'

const About = () => {
    return ( 
        <div>
            <Head>
                <title>Todo - About</title>
            </Head>
            <h1>About me</h1>
            <p>My name is Bart</p>
            <p>Github - <a target="_blank" href="https://github.com/Bart-15/next-todo">Bart-15</a></p>
        </div>
     );
}
 
export default About;