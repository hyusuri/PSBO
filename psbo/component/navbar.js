import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return(
        <nav className="nav">
            <div className="logo">
                <Image src="/ipbscholar.png" width={150} height={60} />
            </div>
            
            <Link href="/"><a>Home</a></Link>
            <Link href="/profile"><a>Profile</a></Link>
        </nav>
    )
}

export default Navbar;