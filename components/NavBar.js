import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import './NavBar.module.css';

export default function NavBar() {
    const router = useRouter();
    const { pathname } = router; 
    return (
        <nav className="nav">
          <img className='img' src="/vercel.svg" />
          <div>
            <Link href="/">
              <a className={pathname === "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/about">
              <a className={pathname === "/about" ? "active" : ""}>About</a>
            </Link>
          </div>
        </nav>
      );
}