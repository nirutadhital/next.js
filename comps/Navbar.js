import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/niruta">Contact</Link>
        </nav>
     );
}
 
export default Navbar;