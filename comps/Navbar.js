import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/8_1sasa11.jpg" width={128} height={77} alt=""></Image>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/niruta">Contact</Link>
        </nav>
     )
}
 
export default Navbar;