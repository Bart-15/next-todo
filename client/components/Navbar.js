import Link from 'next/link'
const Navbar = () => {
    return ( 
        <nav>
            <div className="nav-logo animate__animated animate__headShake">
             <Link href="/">
                <a className="nav-logoLink">Todo List</a>
             </Link>  
            </div>
            <div className="nav-links">
            <ul>
                <li>
                <Link href="/todos">
                    <a className="nav-item">Todos</a>
                </Link>
                </li>
                <li>
                <Link href="/about">
                    <a className="nav-item">About</a>
                </Link>
                </li>
            </ul>
            </div>
          </nav>
     );
}
 
export default Navbar ;