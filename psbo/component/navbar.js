import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return(
        <nav className="font-sans">
            <div className="logo">
                <Image src="/ipbscholar.png" width={150} height={60} />
            </div>
            
            <Link className="font-sans" href="/"><a>Home</a></Link>
            <Link className="font-sans" href="/profile"><a>Profile</a></Link>
        </nav>
    )
}

export default Navbar;