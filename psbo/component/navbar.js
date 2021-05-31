import Link from 'next/link'

const Navbar = () => {
    return(
        <nav>
            <div className="logo">
                <h1>IPB Schoolar</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="profile/profile"><a>Profile</a></Link>
        </nav>
    )
}

export default Navbar;