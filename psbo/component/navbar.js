import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return(
        <nav>
            <div className="logo">
                <Image src="/ipbscholar.png" width={250} height={70}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="profile/profile"><a>Profile</a></Link>
        </nav>
    )
}

export default Navbar;