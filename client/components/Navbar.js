import Link from 'next/link'
const Navbar = () => {
    return ( 
        <nav>
            <div className="nav-logo">
             <Link href="/">
                <a className="nav-logoLink">Bart</a>
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